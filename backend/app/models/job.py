from pydantic import BaseModel, Field, HttpUrl
from typing import Optional, List
from datetime import date

class JobBase(BaseModel):
    title: str = Field(..., description="Job title")
    company_name: str = Field(..., description="Name of the hiring company")
    location: str = Field(..., description="Job location (e.g., Karachi, Hyderabad, Remote)")
    description: Optional[str] = Field(None, description="Detailed job description")
    requirements: Optional[str] = Field(None, description="Job requirements or qualifications")
    job_type: Optional[str] = Field(None, description="Type of employment (e.g., Full-time, Part-time, Internship, Freelance)")
    source_url: HttpUrl = Field(..., description="Link to the original job posting (e.g., on Rozee.pk)")
    posted_date: Optional[date] = Field(None, description="Date the job was posted")

class JobCreate(JobBase):
    pass

class Job(JobBase):
    id: str # Or UUID/int depending on DB
    added_date: date = Field(default_factory=date.today)
    is_female_friendly: Optional[bool] = Field(False, description="Flag indicating if the job is specifically highlighted for female applicants") # For Female Empowerment feature

    class Config:
        from_attributes = True

class JobList(BaseModel):
    jobs: List[Job]
    total: int

