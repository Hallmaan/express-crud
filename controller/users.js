const db = require('../lib/database');
const userModel = require('../model/usersModel');
const jwt = require('jsonwebtoken');

module.exports = {
    signUp: async (req,res,next) => {
        console.log('usercontroller signup called', req.value.body);
    },

    signIn: async (req,res,next) => {
        console.log('usercontroller signup called');
    },

    secret: async (req,res,next) => {
        console.log('usercontroller signup called');
    },

    getUsers: async(req,res,next) => {
        var userId = req.headers['id'];
        if(!userId)
        {
            return res.status(400).json({code: "Error!", message:"No param occured"});
        }
        else
        {
        try{
            // let requestData = req.body;
            
            let user = await userModel.getUser(userId);
            return res.status(200).json({code: "User Found", message:user});

        } catch(err)
        {
            console.log('Opps, error occured!', err);
        }
    }
    }
}