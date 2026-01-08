from flask import Blueprint, request, jsonify
import requests
from dotenv import load_dotenv
import os
load_dotenv()

chatbot_bp = Blueprint("chatbot", __name__)

GROQ_API_KEY = os.getenv('GROQ_API_KEY')

@chatbot_bp.route("/chat", methods=["POST"])
def chat():
    data = request.json
    print(data,"==============")
    user_msg = data.get("user_msg", "")
    if not user_msg:
        return jsonify({"reply": "No message provided"}), 400

    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    system_prompt = (
       """
                You are the official chatbot for PNB Technologies website (https://www.pnbtechnologies.com/). 
                Always answer as the bot of PNB Technologies. 

                Guidelines:

                1. Only provide answers based on information from this website. 
                2. If the user asks about services, products, or company information, give a short, accurate summary, not full content. 
                3. Do not add information that is not on the website. 
                4. If the question is not related to PNB Technologies or the website content, respond exactly: 
                "Your query has been saved. Soon a consultant will contact you."
                5. Keep responses polite, professional, and concise.
                """
    )

    body = {
        "model": "llama-3.3-70b-versatile", 
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_msg}
        ]
    }

    try:
        res = requests.post(url, headers=headers, json=body)
        res.raise_for_status()
        data = res.json()
        
        reply = data["choices"][0]["message"]["content"]
    except Exception as e:
        reply = f"Error: {str(e)}"

    return jsonify({"reply": reply})
