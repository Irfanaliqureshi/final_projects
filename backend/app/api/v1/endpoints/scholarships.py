from fastapi import APIRouter, HTTPException, Query, status
from typing import List, Optional
from datetime import date

from app.models.scholarship import Scholarship, ScholarshipList # Import scholarship models

router = APIRouter()

# Placeholder data - replace with database interaction when available
_placeholder_scholarships = [
    Scholarship(
        id="sch001", 
        title="HEC Need Based Scholarship", 
        organization="Higher Education Commission (HEC)", 
        description="Scholarships for talented students from low-income backgrounds.", 
        eligibility_criteria="Varies by university, typically requires admission and financial need proof.", 
        deadline=date(2025, 10, 31), 
        link="https://www.hec.gov.pk/english/scholarshipsgrants/needbased/Pages/default.aspx",
        region_focus="Pakistan"
    ),
    Scholarship(
        id="sch002", 
        title="Sindh Endowment Fund Scholarship", 
        organization="Sindh Education Endowment Fund (SEEF)", 
        description="Scholarships for meritorious students of Sindh pursuing higher education.", 
        eligibility_criteria="Must be a Sindh domiciled student admitted to approved institutions.", 
        deadline=date(2025, 9, 30), 
        link="https://seef.sindh.gov.pk/",
        region_focus="Sindh"
    ),
    Scholarship(
        id="sch003", 
        title="IBA Sukkur Merit Scholarship", 
        organization="Sukkur IBA University", 
        description="Merit-based scholarships for undergraduate and graduate programs.", 
        eligibility_criteria="Based on academic performance and admission test scores.", 
        deadline=None, # Often tied to admission deadlines
        link="https://www.iba-suk.edu.pk/admissions/scholarships",
        region_focus="Sindh"
    ),
]

@router.get("/", response_model=ScholarshipList)
async def list_scholarships(
    skip: int = Query(0, ge=0, description="Number of items to skip"),
    limit: int = Query(10, ge=1, le=100, description="Maximum number of items to return"),
    organization: Optional[str] = Query(None, description="Filter by offering organization"),
    search: Optional[str] = Query(None, description="Search scholarships by title or description")
):
    """Retrieve a list of scholarships with optional filtering and pagination."""
    # Placeholder filtering/searching logic
    filtered_scholarships = _placeholder_scholarships
    if organization:
        org_lower = organization.lower()
        filtered_scholarships = [s for s in filtered_scholarships if org_lower in s.organization.lower()]
    if search:
        search_lower = search.lower()
        filtered_scholarships = [s for s in filtered_scholarships if search_lower in s.title.lower() or (s.description and search_lower in s.description.lower())]
    
    paginated_scholarships = filtered_scholarships[skip : skip + limit]
    
    return ScholarshipList(scholarships=paginated_scholarships, total=len(filtered_scholarships))

@router.get("/{scholarship_id}", response_model=Scholarship)
async def get_scholarship(scholarship_id: str):
    """Retrieve details for a specific scholarship by its ID."""
    # Placeholder logic to find scholarship by ID
    scholarship = next((s for s in _placeholder_scholarships if s.id == scholarship_id), None)
    if scholarship is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Scholarship not found")
    return scholarship

# TODO: Add endpoints for creating, updating, deleting scholarships (likely admin-only)

