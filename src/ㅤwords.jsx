       
       async function getRandomWord() {
        try {
          const response = await fetch('https://f0be-187-106-41-153.ngrok-free.app/api/termo');
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomTerm = data[randomIndex];
            console.log(`ID: ${randomTerm.id}, Palavra: ${randomTerm.palavra}`);
          } else {
            console.error("Resposta não é JSON.");
          }
        } catch (error) {
          console.error('Erro ao buscar a palavra:', error);
        }
      }
      
      getRandomWord();