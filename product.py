from flask import Flask, jsonify, request
import json
from flask_cors import CORS

app = Flask("Product Server")
CORS(app)


products = [
    {'id': 143, 'name': 'Notebook', 'price': 5.49},
    {'id': 144, 'name': 'Black Marker', 'price': 1.99}
]

@app.route("/products", methods=["GET"])
def home():
    return jsonify(products)

@app.route("/product/<id>", methods=["GET"])
def get_product(id):
    product = [x for x in products if x["id"] == int(id)][0]
    return jsonify(product)

@app.route("/product", methods=["POST"])
def product_post():
    data = request.get_json()
    products.append(data)
    return jsonify("", 200, products)

@app.route("/product/<id>", methods=["PUT"])
def update_product(id):
    id = int(id)
    updated_product = json.loads(request.data)
    product = [x for x in products if x["id"] == id][0]
    for key, value in updated_product.items():
        product[key] = value
    return '', 204

@app.route('/products/<id>', methods=['DELETE'])
def remove_product(id):
    id = int(id)
    product = [x for x in products if x["id"] == id][0]
    products.remove(product)
    return '', 204

app.run(port=5000,debug=True)
