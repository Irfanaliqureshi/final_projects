from pydantic import BaseModel, EmailStr, Field

class UserBase(BaseModel):
    phone_number: str = Field(..., description="User's phone number, used for login")
    # Add other base fields if needed, e.g., name

class UserCreate(UserBase):
    # No password needed for OTP login initially, but might add later if needed
    pass

class UserLogin(BaseModel):
    phone_number: str = Field(..., description="User's phone number")
    otp: str = Field(..., description="One-Time Password received via SMS")

class User(UserBase):
    id: str # Or UUID, depending on Supabase implementation
    # Add other fields stored in DB, e.g., created_at, updated_at

    class Config:
        from_attributes = True # Pydantic V2 uses this instead of orm_mode

class Token(BaseModel):
    access_token: str
    token_type: str

class Msg(BaseModel):
    message: str

