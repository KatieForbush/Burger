-- * Create the `burgers_db`.
--    * Switch to or use the `burgers_db`.
--    * Create a `burgers` table with these fields:
--      * **id**: an auto incrementing int that serves as the primary key.
--      * **burger_name**: a string.
--      * **devoured**: a boolean.

-- Create a new database called 'burgers_db'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = N'burgers_db'
)
CREATE DATABASE burgers_db
GO

-- Create a new table called 'burgers' in schema 'burgers_db'
-- Drop the table if it already exists
IF OBJECT_ID('SchemaName.burgers', 'U') IS NOT NULL
DROP TABLE SchemaName.burgers
GO
-- Create the table in the specified schema
CREATE TABLE SchemaName.burgers
(
    Id INT NOT NULL, AUTO_ increment, PRIMARY KEY, -- primary key column
    burger_name VARCHAR(50) NOT NULL,
    devoured boolean NOT NULL
    -- specify more columns here
);
GO