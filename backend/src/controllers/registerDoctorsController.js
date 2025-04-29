import bcryptjs from "bcryptjs";
import doctorModel from "../models/doctors.js";

//array de funciones
const registerDoctorsController = {};

registerDoctorsController.register = async (req, res) =>{
    const{name, email, password, specialty} = req.body;

    try{
        const existingDoctor = await doctorModel.findOne({email})
        if(existingDoctor) {
            return res.json({message: "El doctor ya existe"})
        }

        //Encriptar contraseña
        const passwordHash = await bcryptjs.hash(password, 10)

        const newDoctor = new doctorModel({name, email, password: passwordHash, specialty})

        await newDoctor.save();
        res.json({message: "Doctor registered"})
    
    } catch (error) {
        console.log("catch error: " + error)
        }
};

export default registerDoctorsController;