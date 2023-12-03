const express = require('express');
const router = express.Router();
const { Tenant } = require('../db/models');

// POST - Add data to the tenants table
router.post('/addTenant', async (req, res) => {
  try {
    const newTenant = await Tenant.query().insert(req.body);
    res.status(201).json(newTenant);
  } catch (error) {
    res.status(500).json({ error: 'Could not add tenant' });
  }
});

// GET - Get all data from the tenants table
router.get('/getTenants', async (req, res) => {
  try {
    const tenants = await Tenant.query();
    res.json(tenants);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve tenants' });
  }
});

// GET - Get specific record based on ID
router.get('/getTenant/:id', async (req, res) => {
  try {
    const tenant = await Tenant.query().findById(req.params.id);
    if (tenant) {
      res.json(tenant);
    } else {
      res.status(404).json({ error: 'Tenant not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve tenant' });
  }
});

// DELETE - Delete specific record based on ID
router.delete('/deleteTenant/:id', async (req, res) => {
  try {
    const deletedTenant = await Tenant.query().deleteById(req.params.id);
    if (deletedTenant) {
      res.json({ message: 'Tenant deleted successfully' });
    } else {
      res.status(404).json({ error: 'Tenant not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Could not delete tenant' });
  }
});

// PATCH - Alter specific record based on ID
router.patch('/updateTenant/:id', async (req, res) => {
  try {
    const updatedTenant = await Tenant.query().findById(req.params.id).patch(req.body);
    if (updatedTenant) {
      res.json({ message: 'Tenant updated successfully' });
    } else {
      res.status(404).json({ error: 'Tenant not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Could not update tenant' });
  }
});

module.exports = router;
