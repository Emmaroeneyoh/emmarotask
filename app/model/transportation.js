const { ItineraryModel } = require("../../core/db/Itinerary");



const mgnaddtransportationModel = async (data, res) => {
    try {
      const { mgnid ,transportation} = data;
      const form = await ItineraryModel.findByIdAndUpdate(mgnid, {
        $push: {
          transportation
        },
      });
      return form;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
  };
  const mgnremovetransportationModel = async (data, res) => {
    try {
      const { mgnid ,transportationid } = data;
      const form = await ItineraryModel.findByIdAndUpdate(mgnid, {
        $pull: {
         transportation: { _id :transportationid },
        },
      });
      return form;
    } catch (error) {
      console.log("error", error);
      return error.message;
    }
};
  
const mgnedittransportationModel = async (data, res) => {
    try {
      const {
     transportationid , mode , details ,departureDate , arrivalDate
      } = data;
  
      //updating the trainer pofile1
      const form = await ItineraryModel.updateOne(
        { "transportation._id": transportationid },
        {
          $set: {
            "transportation.$.arrivalDate": arrivalDate,
            "transportation.$.departureDate": departureDate,
            "transportation.$.mode": mode,
            "transportation.$.details": details,
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
    mgnedittransportationModel ,  mgnremovetransportationModel , mgnaddtransportationModel
}