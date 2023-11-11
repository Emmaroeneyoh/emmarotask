const { ItineraryModel } = require("../../core/db/Itinerary");



const mgnadddestinationModel = async (data, res) => {
    try {
      const { mgnid ,destination} = data;
      const form = await ItineraryModel.findByIdAndUpdate(mgnid, {
        $push: {
          destination
        },
      });
      return form;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
  };
  const mgnremovedestinationModel = async (data, res) => {
    try {
      const { mgnid ,destinationid } = data;
      const form = await ItineraryModel.findByIdAndUpdate(mgnid, {
        $pull: {
         destination: { _id :destinationid },
        },
      });
      return form;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
};
  
const mgneditdestinationModel = async (data, res) => {
    try {
      const {
     destinationid , arrivalDate , departureDate , city , country
      } = data;
  
      //updating the trainer pofile1
      const form = await ItineraryModel.updateOne(
        { "destination._id": destinationid },
        {
          $set: {
            "destination.$.arrivalDate": arrivalDate,
            "destination.$.departureDate": departureDate,
            "destination.$.city": city,
            "destination.$.country": country,
          },
        },
        { new: true }
      );
  
      return form;
    } catch (error) {
      console.log(error)
      return error.message
    }
};
  

module.exports = {
    mgneditdestinationModel ,  mgnremovedestinationModel , mgnadddestinationModel
}