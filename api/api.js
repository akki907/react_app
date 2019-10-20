const express = require('express')
const router = express.Router();
const Tenant = require('./../models/tenant');
const validateTenantInput = require('./../validators/tenant_validation.js')
router.post('/create', (req, res) => {
    const {
        errors,
        isValid
    } = validateTenantInput(req.body)

    if (!isValid) {
        return res.status(400).json({
            success: false,
            message: errors
        });
    }
    const newTenant = new Tenant({
        name: req.body.name,
        pan: req.body.pan,
        address: req.body.address,
        aadhar: req.body.aadhar
    });

    newTenant.save().then(tenant => res.json({
        success: true,
        message: 'tenant created.',
        data: tenant
    })).catch(err => {
        if (err.code == 11000) {
            return res.json({
                success: false,
                message: 'Pan or Aadhar already exists.'
            })
        }
        res.json({
            success: false,
            message: err
        })
    })

})

// @all list 

router.get('/list', (req, res) => {
    Tenant.find()
        .sort({
            createdOn: -1
        })
        .then(tenants => {
            if (tenants.length == 0) return res, json({
                success: false,
                message: "No Tenant is created yet!"
            })
            res.json({
                success: true,
                data: tenants
            })
        })
        .catch(err => res.status(404).json({
            success: false,
            message: err
        }));
});


router.get('/:id', (req, res) => {
    if (!req.params.id) return res.json({
        success: false,
        message: 'Please Provide id'
    })
    Tenant.findById(req.params.id)
        .then(tenant => {
            if (!tenant) return res.json({
                success: false,
                message: tenant
            })
            res.json({
                success: true,
                data: tenant
            })
        })
        .catch(err =>
            res.status(404).json({
                success: false,
                message: 'No tenant found with that ID'
            })
        )
});

router.delete(
    '/:id',
    (req, res) => {
        if (!req.params.id) return res.json({
            success: false,
            message: 'Please Provide id'
        })
        Tenant.findById(req.params.id)
            .then(tenant => {
                if (!tenant) return res.json({
                    success: false,
                    message: 'No Tenant Found.'
                })
                tenant.remove().then(() => res.json({
                    success: true
                }));
            })
            .catch(err => res.status(404).json({
                success: false,
                message: 'No tenant found'
            }))
    }
);

router.put(
    '/:id',
    (req, res) => {
        if (!req.params.id) return res.json({
            success: false,
            message: 'Please Provide id'
        })

        const {
            errors,
            isValid
        } = validateTenantInput(req.body)
    
        if (!isValid) {
            return res.status(400).json({
                success: false,
                message: errors
            });
        }

        Tenant.findById(req.params.id)
            .then(tenant => {
                if (!tenant) return res.json({
                    success: false,
                    message: 'No Tenant Found.'
                })
                // update
                tenant.name = req.body.name;
                tenant.address = req.body.address
                tenant.pan = req.body.pan;
                tenant.aadhar = req.body.aadhar
                tenant.updatedAt = Date.now()
                tenant.save().then(saved => {
                        res.json({
                            success: true,
                            message: saved
                        })
                    })
                    .catch(err => {
                        if (err.code == 11000) {
                            return res.json({
                                success: false,
                                message: 'Pan or Aadhar already exists.'
                            })
                        }
                        res.json({
                            success: false,
                            message: err
                        })
                    })
            })
            .catch(err => res.status(404).json({
                success: false,
                message: 'No tenant found'
            }))
    }
);

module.exports = router;