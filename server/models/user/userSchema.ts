import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  img: string;
  role: string;
  status: boolean;
}

mongoose.set( 'useFindAndModify', false );
const uniqueValidator = require( 'mongoose-unique-validator' );

const validRoles = {
  values: ['ADMIN_ROLE', 'USER_ROLE'],
  message: '{VALUE} no es un rol válido'
};

const userSchema = new Schema( {
  firstName: {
    type: String,
    required: [true, 'The name is required']
  },
  lastName: {
    type: String,
    required: [true, 'The last name is required']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'The email is required']
  },
  password: {
    type: String,
    required: [true, 'The password is required']
  },
  img: {
    type: String,
    required: false
  },
  role: {
    type: String,
    default: 'USER_ROLE',
    enum: validRoles
  },
  status: {
    type: Boolean,
    default: true
  }
} );

userSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  //Si no eliminamos el password del objeto se nos devolveria en las peticiones
  delete userObject.password;

  return userObject;
};

userSchema.plugin( uniqueValidator, { message: '{PATH}' } );

export default mongoose.model<IUser>( 'User', userSchema );
