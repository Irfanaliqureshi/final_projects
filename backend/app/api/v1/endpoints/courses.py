from fastapi import APIRouter, HTTPException, Query, status
from typing import List, Optional

from app.models.course import Course, CourseList # Import course models

router = APIRouter()

# Placeholder data - replace with database interaction when available
_placeholder_courses = [
    Course(id="crs001", title="Basic Computer Programming", description="Learn the fundamentals of programming.", category="Programming", image_url="/assets/img/gallery/topic1.png", price="$20", rating=4.5),
    Course(id="crs002", title="Web Development", description="Build modern websites and web applications.", category="Programming", image_url="/assets/img/gallery/topic2.png", price="$25", rating=4.7),
    Course(id="crs003", title="Software Engineering Fundamentals", description="Understand the principles of software engineering.", category="Programming", image_url="/assets/img/gallery/topic3.png", price="$30", rating=4.6),
    Course(id="crs004", title="UI/UX Design Principles", description="Master the art of user interface and experience design.", category="Design", image_url="/assets/img/gallery/topic4.png", price="$25", rating=4.8),
    Course(id="crs005", title="Graphic Design Essentials", description="Learn the core concepts of graphic design.", category="Design", image_url="/assets/img/gallery/topic5.png", price="$20", rating=4.4),
    Course(id="crs006", title="Digital Marketing Strategy", description="Develop effective online marketing strategies.", category="Marketing", image_url="/assets/img/gallery/topic6.png", price="$35", rating=4.9),
]

@router.get("/", response_model=CourseList)
async def list_courses(
    skip: int = Query(0, ge=0, description="Number of items to skip"),
    limit: int = Query(10, ge=1, le=100, description="Maximum number of items to return"),
    category: Optional[str] = Query(None, description="Filter courses by category"),
    search: Optional[str] = Query(None, description="Search courses by title or description")
):
    """Retrieve a list of courses with optional filtering and pagination."""
    # Placeholder filtering/searching logic
    filtered_courses = _placeholder_courses
    if category:
        filtered_courses = [c for c in filtered_courses if c.category.lower() == category.lower()]
    if search:
        search_lower = search.lower()
        filtered_courses = [c for c in filtered_courses if search_lower in c.title.lower() or search_lower in c.description.lower()]
    
    paginated_courses = filtered_courses[skip : skip + limit]
    
    return CourseList(courses=paginated_courses, total=len(filtered_courses))

@router.get("/{course_id}", response_model=Course)
async def get_course(course_id: str):
    """Retrieve details for a specific course by its ID."""
    # Placeholder logic to find course by ID
    course = next((c for c in _placeholder_courses if c.id == course_id), None)
    if course is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Course not found")
    return course

# TODO: Add endpoints for creating, updating, deleting courses (likely admin-only)

