const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// In-memory storage for maintenance records
let maintenanceRecords = [];

// POST endpoint to input 5 records with 2 fields each: ID and MechanicHours
app.post('/items', (req, res) => {
    const records = req.body.records || [];
    
    // we are taking inputs for 5 records
    
    if (!Array.isArray(records) || records.length !== 5) {
        return res.status(400).json({ error: 'Please provide exactly 5 records with ID and MechanicHours fields each' });
    }
    
    const createdRecords = [];
    const errors = [];
    
    // Process each record
    for (let i = 0; i < records.length; i++) {
        const { ID, MechanicHours } = records[i];
        
        // Create new maintenance record
        const record = {
            ID,
            MechanicHours
        };
        
        maintenanceRecords.push(record);
        createdRecords.push(record);
    }
    
    if (errors.length > 0) {
        return res.status(400).json({ 
            error: 'Some records had issues',
            created: createdRecords,
            errors: errors 
        });
    }
    
    res.status(201).json({ created: createdRecords });
});

// GET endpoint to retrieve all maintenance records
app.get('/items', (req, res) => {
    res.json(maintenanceRecords);
});

app.listen(3000, () => {
  console.log('Server running');
});
