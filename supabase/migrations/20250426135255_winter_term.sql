/*
  # Create affirmations table for storing user affirmations

  1. New Tables
    - `affirmations`
      - `id` (uuid, primary key)
      - `user_id` (uuid) - References profiles.id
      - `text` (text)
      - `is_favorite` (boolean)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `affirmations` table
    - Add policies for authenticated users to:
      - Create their own affirmations
      - Read their own affirmations
      - Update their own affirmations
      - Delete their own affirmations
*/

CREATE TABLE IF NOT EXISTS affirmations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) NOT NULL,
  text text NOT NULL,
  is_favorite boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE affirmations ENABLE ROW LEVEL SECURITY;

-- Policy to allow users to create their own affirmations
CREATE POLICY "Users can create own affirmations"
  ON affirmations
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policy to allow users to read their own affirmations
CREATE POLICY "Users can read own affirmations"
  ON affirmations
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Policy to allow users to update their own affirmations
CREATE POLICY "Users can update own affirmations"
  ON affirmations
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Policy to allow users to delete their own affirmations
CREATE POLICY "Users can delete own affirmations"
  ON affirmations
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create index for faster queries
CREATE INDEX affirmations_user_id_created_at_idx ON affirmations (user_id, created_at);