const supabase = require("../node_modules/@supabase/supabase-js");
const supabaseUrl = "https://xoqvsbyhxetxxlfkhspo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvcXZzYnloeGV0eHhsZmtoc3BvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1NDY3ODYsImV4cCI6MjAzMDEyMjc4Nn0.PPpPdS1EhJ9EO3lRgjYIVcVp9EqYgFhQGsv5dGqMyuk";
const supaClient = supabase.createClient(supabaseUrl, supabaseKey);

module.exports = { supaClient };
