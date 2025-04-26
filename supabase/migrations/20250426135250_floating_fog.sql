/*
  # Create moods table for tracking user emotions

  1. New Tables
    - `moods`
      - `id` (uuid, primary key)
      - `user_id` (uuid) - References profiles.id
      - `mood_level` (integer) - Scale from 1-10
      - `anxiety_level` (integer) - Scale from 1-10
      - `energy_level` (integer) - Scale from 1-10
      - `sleep_quality` (integer) - Scale from 1-10
      - `notes` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `moods` table
    - Add policies for authenticated users to:
      - Create their own mood entries
      - Read their own mood entries
*/

CREATE TABLE IF NOT EXISTS moods (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) NOT NULL,
  mood_level integer CHECK (mood_level BETWEEN 1 AND 10),
  anxiety_level integer CHECK (anxiety_level BETWEEN 1 AND 10),
  energy_level integer CHECK (energy_level BETWEEN 1 AND 10),
  sleep_quality integer CHECK (sleep_quality BETWEEN 1 AND 10),
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE moods ENABLE ROW LEVEL SECURITY;

-- Policy to allow users to create their own mood entries
CREATE POLICY "Users can create own mood entries"
  ON moods
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policy to allow users to read their own mood entries
CREATE POLICY "Users can read own mood entries"
  ON moods
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Create index for faster queries on user_id and created_at
CREATE INDEX moods_user_id_created_at_idx ON moods (user_id, created_at);