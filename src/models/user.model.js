import mongoose ,{Schema} from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      unique: true,
      trim: true,
    },
    refreshToken: {
      type: String,
    },
    watchHistory: [
      {
        type:Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
  },
  { timestamps: true }
);

// TO SAVE PASSWORD ENCRYPTED

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};


UserSchema.methods.generateAccesstoken = async function(){
   return jwt.sign({
            _id:this._id,
            email:this.email,
            username:this.username
    }),
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
}

UserSchema.methods.generateRefreshToken = async function (){
return jwt.sign({
    _id:this._id,
}),
process.env.REFRESH_TOKEN_SECRET,
{
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
}
}

export const User = mongoose.model("User", UserSchema);
