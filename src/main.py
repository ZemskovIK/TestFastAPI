from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from routers import posts_router

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(posts_router.router)

# get - list posts
# get - view post
# post - create post
# patch - update post добавить
# delete - delete post добавить
