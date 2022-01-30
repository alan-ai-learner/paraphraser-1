from simpletransformers.t5 import T5Model

def model_loaded(trained_model_path, args):
    model = T5Model("t5", trained_model_path, args=args, use_cuda=False)
    return model