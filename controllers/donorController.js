const Donor = require('../models/donors');

const donorController = {
    addDonor: async (req, res) => {
        try {
          const {name, age, bloodGroup, address, email, phoneNumber} = req.body;
          const newDonor = new Donor({
            name,
            age,
            bloodGroup,
            address,
            email,
            phoneNumber,
          });
          await newDonor.save();
          res.status(201).json({ message: 'Donor added successfully' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'An error occurred' });
        }
      },
      getAllDonors: async (req, res) => {
        try {
            const donors = await Donor.find();
            res.status(200).json({ donors });
        } catch (error) {
          console.error('Error occurred:', error);
          res.status(500).json({ message: 'An error occurred' });
        }
      },
};

module.exports = donorController;