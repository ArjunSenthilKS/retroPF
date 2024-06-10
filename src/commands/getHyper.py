from flask import Flask, request, jsonify
from hyperliquid.info import Info
from hyperliquid.utils import constants

info = Info(constants.MAINNET_API_URL, skip_ws=True)

app = Flask(__name__)

@app.route('/get-hyper', methods=['POST'])
def open_positions():
    user_state = info.user_state("0xDa51708fbAb777A17FA863f313214b37Ce2AB3A3")
    first_coin = user_state['assetPositions'][0]['position']
    return(jsonify(first_coin))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port = 5000)