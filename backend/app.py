
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/forecast', methods=['POST'])
def forecast():
    data = request.get_json()

    # Basic stage allocation validation
    stage_allocations = data.get('stage_allocations', {})
    if round(sum(stage_allocations.values()), 2) != 100.0:
        return jsonify({"error": "Stage allocations must sum to 100%"}), 400

    return jsonify({"status": "valid input", "message": "Forecast logic coming soon!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
