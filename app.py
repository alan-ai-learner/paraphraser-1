# Environement name is "paraphrase"
import uvicorn
from fastapi import FastAPI,Request, Response
from data import Item
from model import  model_loaded
import yaml


def read_yaml(path_to_yaml: str) -> dict:
    with open(path_to_yaml) as yaml_file:
        content = yaml.safe_load(yaml_file)
    return content

config_path = "config.yaml"
config = read_yaml(config_path)



args = {
    "overwrite_output_dir": True,
    "max_seq_length": 256,
    "max_length": 50,
    "top_k": 50,
    "top_p": 0.95,
    "num_return_sequences": 10,
}


trained_model_path = config["model"]["MODEL_DIR"]

app = FastAPI()



# Salt to your taste
ALLOWED_ORIGINS = '*'    # or 'foo.com', etc.

# handle CORS preflight requests
@app.options('/{rest_of_path:path}')
async def preflight_handler(request: Request, rest_of_path: str) -> Response:
    response = Response()
    response.headers['Access-Control-Allow-Origin'] = ALLOWED_ORIGINS
    response.headers['Access-Control-Allow-Methods'] = 'POST, GET, DELETE, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Authorization, Content-Type'
    print(response)
    return response

# set CORS headers
@app.middleware("http")
async def add_CORS_header(request: Request, call_next):
    response = await call_next(request)
    response.headers['Access-Control-Allow-Origin'] = ALLOWED_ORIGINS
    response.headers['Access-Control-Allow-Methods'] = 'POST, GET, DELETE, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Authorization, Content-Type'
    return response

model = model_loaded(trained_model_path, args)

@app.get("/")
async def root():
    return {"message": "Welcome to the Paraphrase API"}



@app.post('/paraphraser/')
async def paraphraser(info : Request):

    req_info = await info.json()
    print(req_info)
    input_text=req_info['text']
    responses =  model.predict([f"paraphrase:{input_text}"])
    print(f" it is {responses}" )
    return  {
        "paraphrases": set(responses[0]),  
        }

if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
    
# #uvicorn app:app --reload

