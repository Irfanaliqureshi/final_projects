from fastapi import FastAPI
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Placeholder for Supabase client initialization
# supabase_url = os.environ.get("SUPABASE_URL")
# supabase_key = os.environ.get("SUPABASE_KEY")
# supabase: Client | None = None
# if supabase_url and supabase_key:
#     try:
#         # from supabase import create_client, Client # Uncomment when credentials are provided
#         # supabase = create_client(supabase_url, supabase_key)
#         print("Supabase client initialized successfully.")
#     except Exception as e:
#         print(f"Error initializing Supabase client: {e}")
# else:
#     print("Supabase URL or Key not found in environment variables. Running with placeholder logic.")

app = FastAPI(
    title="AI Career Guidance Platform API",
    description="API for the AI Career & Education Guidance Platform for Sindh.",
    version="0.1.0",
    # TODO: Add OpenAPI tags metadata for better documentation organization
)

# TODO: Add CORS middleware if frontend and backend are on different origins
# from fastapi.middleware.cors import CORSMiddleware
# origins = [
#     "http://localhost:3000",  # Allow frontend dev server
#     # Add production frontend URL here
# ]
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# Import and include API routers
from app.api.v1.endpoints import auth as auth_endpoints
from app.api.v1.endpoints import courses as course_endpoints
from app.api.v1.endpoints import scholarships as scholarship_endpoints
from app.api.v1.endpoints import jobs as job_endpoints

app.include_router(auth_endpoints.router, prefix="/api/v1/auth", tags=["Authentication"])
app.include_router(course_endpoints.router, prefix="/api/v1/courses", tags=["Courses"])
app.include_router(scholarship_endpoints.router, prefix="/api/v1/scholarships", tags=["Scholarships"])
app.include_router(job_endpoints.router, prefix="/api/v1/jobs", tags=["Jobs"])
# TODO: Include other routers (e.g., users, AI guidance, admin, etc.) later

@app.get("/", tags=["Root"])
async def read_root():
    """Root endpoint to check if the API is running."""
    return {"message": "Welcome to the AI Career Guidance Platform API!"}


if __name__ == "__main__":
    import uvicorn
    # Run the server; host="0.0.0.0" makes it accessible externally
    # Use reload=True for development to auto-reload on code changes
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

