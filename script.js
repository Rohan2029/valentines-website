/* General Styling */
body {
    font-family: 'Poppins', sans-serif;
    background-color: #FDF6F0; /* Soft Pastel Background */
    text-align: center;
    margin: 0;
    padding: 0;
}

/* Home Section */
.home {
    margin-top: 50px;
}

.main-image {
    width: 50%;
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* CTA Button */
.cta-button {
    background-color: #FF8FAB;
    color: white;
    font-size: 18px;
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
}

.cta-button:hover {
    background-color: #FF6B8A;
}

/* Quiz Pop-up */
.quiz-popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.quiz-box button {
    display: block;
    margin: 10px auto;
    padding: 10px;
    font-size: 16px;
    background: #B5EAEA;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
}

.quiz-box button:hover {
    background: #81D4FA;
}

/* Gallery */
.gallery {
    display: none;
    margin-top: 30px;
}

.image-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
    justify-content: center;
    padding: 20px;
}

.image-container img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
}

