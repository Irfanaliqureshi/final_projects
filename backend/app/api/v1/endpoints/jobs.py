from fastapi import APIRouter, HTTPException, Query, status
from typing import List, Optional
from datetime import date

from app.models.job import Job, JobList # Import job models

router = APIRouter()

# Placeholder data - replace with database interaction/scraping/API integration later
_placeholder_jobs = [
    Job(
        id="job001",
        title="Junior Software Engineer",
        company_name="Tech Solutions Ltd.",
        location="Karachi",
        description="Entry-level position for developing web applications using Python and React.",
        requirements="BSc in Computer Science, basic knowledge of Python/JavaScript.",
        job_type="Full-time",
        source_url="https://example.com/job/1", # Placeholder URL
        posted_date=date(2025, 5, 20),
        is_female_friendly=False
    ),
    Job(
        id="job002",
        title="Content Writer (Urdu/Sindhi)",
        company_name="Media Corp",
        location="Remote",
        description="Create engaging content for websites and social media in Urdu and Sindhi.",
        requirements="Excellent writing skills in Urdu and Sindhi, basic SEO knowledge.",
        job_type="Freelance",
        source_url="https://example.com/job/2", # Placeholder URL
        posted_date=date(2025, 5, 18),
        is_female_friendly=True
    ),
    Job(
        id="job003",
        title="Graphic Designer Intern",
        company_name="Creative Minds Agency",
        location="Hyderabad",
        description="Assist senior designers with various graphic design tasks.",
        requirements="Proficiency in Adobe Creative Suite (Photoshop, Illustrator). Portfolio required.",
        job_type="Internship",
        source_url="https://example.com/job/3", # Placeholder URL
        posted_date=date(2025, 5, 22),
        is_female_friendly=False
    ),
    Job(
        id="job004",
        title="Remote Virtual Assistant",
        company_name="Global Support Services",
        location="Remote",
        description="Provide administrative and technical support to clients remotely.",
        requirements="Good communication skills, proficiency in MS Office, reliable internet.",
        job_type="Part-time",
        source_url="https://example.com/job/4", # Placeholder URL
        posted_date=date(2025, 5, 15),
        is_female_friendly=True
    ),
]

@router.get("/", response_model=JobList)
async def list_jobs(
    skip: int = Query(0, ge=0, description="Number of items to skip"),
    limit: int = Query(10, ge=1, le=100, description="Maximum number of items to return"),
    location: Optional[str] = Query(None, description="Filter jobs by location (e.g., Karachi, Remote)"),
    job_type: Optional[str] = Query(None, description="Filter by job type (e.g., Full-time, Freelance)"),
    is_female_friendly: Optional[bool] = Query(None, description="Filter for jobs marked female-friendly"),
    search: Optional[str] = Query(None, description="Search jobs by title, company, or description")
):
    """Retrieve a list of jobs with optional filtering and pagination."""
    # Placeholder filtering/searching logic
    filtered_jobs = _placeholder_jobs
    if location:
        loc_lower = location.lower()
        filtered_jobs = [j for j in filtered_jobs if loc_lower in j.location.lower()]
    if job_type:
        type_lower = job_type.lower()
        filtered_jobs = [j for j in filtered_jobs if j.job_type and type_lower in j.job_type.lower()]
    if is_female_friendly is not None:
        filtered_jobs = [j for j in filtered_jobs if j.is_female_friendly == is_female_friendly]
    if search:
        search_lower = search.lower()
        filtered_jobs = [j for j in filtered_jobs if 
                         search_lower in j.title.lower() or 
                         search_lower in j.company_name.lower() or 
                         (j.description and search_lower in j.description.lower())]
    
    paginated_jobs = filtered_jobs[skip : skip + limit]
    
    return JobList(jobs=paginated_jobs, total=len(filtered_jobs))

@router.get("/{job_id}", response_model=Job)
async def get_job(job_id: str):
    """Retrieve details for a specific job by its ID."""
    # Placeholder logic to find job by ID
    job = next((j for j in _placeholder_jobs if j.id == job_id), None)
    if job is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Job not found")
    return job

# TODO: Add endpoints for creating, updating, deleting jobs (likely admin-only or via scraping/API integration)

