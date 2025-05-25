from pydantic import BaseModel, Field, HttpUrl
from typing import Optional, List
from datetime import date

class ScholarshipBase(BaseModel):
    title: str = Field(..., description="Name of the scholarship or opportunity")
    organization: str = Field(..., description="Organization offering the scholarship (e.g., HEC, Sindh University)")
    description: Optional[str] = Field(None, description="Detailed description of the scholarship")
    eligibility_criteria: Optional[str] = Field(None, description="Eligibility requirements")
    deadline: Optional[date] = Field(None, description="Application deadline")
    link: HttpUrl = Field(..., description="Link to the official scholarship page or application form")
    region_focus: Optional[str] = Field("Sindh", description="Geographic focus, defaults to Sindh")

class ScholarshipCreate(ScholarshipBase):
    pass

class Scholarship(ScholarshipBase):
    id: str # Or UUID/int depending on DB
    added_date: date = Field(default_factory=date.today)

    class Config:
        from_attributes = True

class ScholarshipList(BaseModel):
    scholarships: List[Scholarship]
    total: int

