document.addEventListener('DOMContentLoaded', function() {
    const uploadButton = document.getElementById('uploadButton');

    uploadButton.addEventListener('click', function() {
        const imageInput = document.getElementById('imageInput');
        const file = imageInput.files[0];

        if (file) {
            const formData = new FormData();
            formData.append('image', file);

            fetch('http://127.0.0.1:5001/compare_faces', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const resultsContainer = document.getElementById('results-container');
                resultsContainer.innerHTML = '';

                data.forEach(result => {
                    const resultCard = document.createElement('div');
                    resultCard.className = 'result-card';

                    const similarityPercentage = (result.similarity * 100).toFixed(2);

                    resultCard.innerHTML = `
                        <img src="${result.image}" alt="User Picture">
                        <div class="result-info">
                            <div class="similarity-bar">
                                <div class="similarity" style="width: ${similarityPercentage}%;"></div>
                            </div>
                            <p class="similarity-text">${similarityPercentage}% Similarity</p>
                        </div>
                    `;

                    resultsContainer.appendChild(resultCard);
                });
            })
            .catch(error => {
                console.error('Error fetching results:', error);
            });
        } else {
            alert('Please select an image to upload.');
        }
    });
});