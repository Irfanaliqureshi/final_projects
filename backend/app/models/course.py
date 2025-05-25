from pydantic import BaseModel, Field
from typing import List, Optional

class CourseBase(BaseModel):
    title: str = Field(..., description="Title of the course")
    description: str = Field(..., description="Brief description of the course")
    category: str = Field(..., description="Category the course belongs to (e.g., Programming, Design)")
    # Add other relevant fields based on requirements
    # e.g., instructor_id, duration, skill_level, language, learning_outcomes

class CourseCreate(CourseBase):
    pass

class Course(CourseBase):
    id: str # Or UUID/int depending on DB
    # Add fields like image_url, price, rating, enrollment_count etc.
    image_url: Optional[str] = None
    price: Optional[str] = None # Or float/Decimal
    rating: Optional[float] = Field(None, ge=0, le=5)

    class Config:
        from_attributes = True

# Model for representing a list of courses, potentially with pagination info
class CourseList(BaseModel):
    courses: List[Course]
    total: int

