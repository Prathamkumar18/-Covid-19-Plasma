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
      deleteDonor: async (req, res) => {
        try {
          const { email } = req.body;
          const deletedDonor = await Donor.findOneAndDelete({ email });
          if (!deletedDonor) {
            res.status(404).json({ message: 'Donor not found' });
          } else {
            res.status(200).json({ message: 'Donor deleted successfully' });
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'An error occurred' });
        }
      },
};

module.exports = donorController;