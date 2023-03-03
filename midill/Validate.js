const yup= require ('yup');
const validate = async function (req,res,next){
  try{ const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        cin: yup.number().required()
    });
    
    await schema.validate(req.body);
    next();
    } catch(err){
        res.send(err.errors);
    }
};
module.exports = validate;