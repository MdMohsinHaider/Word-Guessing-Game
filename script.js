const words = [
    // Living Objects - Animals, Birds, Insects, Plants
    { word: "sparrow", hint: "Small brown bird common in cities" },
    { word: "elephant", hint: "Largest land animal with trunk" },
    { word: "butterfly", hint: "Insect with colorful wings" },
    { word: "tulip", hint: "Brightly colored flowering plant" },
    { word: "oak", hint: "A large deciduous tree" },
    { word: "hummingbird", hint: "Tiny bird with rapid wing flaps" },
    { word: "bee", hint: "Insect that produces honey" },
    { word: "lion", hint: "Known as the king of jungle" },
    { word: "fern", hint: "A non-flowering vascular plant" },
    { word: "caterpillar", hint: "Larval stage of butterfly" },

    // Non-Living Objects
    { word: "book", hint: "Collection of printed pages" },
    { word: "door", hint: "Entry or exit barrier to a room" },
    { word: "table", hint: "Furniture with a flat top" },
    { word: "plastic", hint: "Synthetic material used in many objects" },
    { word: "paper", hint: "Material used for writing or printing" },
    { word: "pencil", hint: "Tool used for writing or drawing" },
    { word: "glass", hint: "Transparent hard substance used in windows" },
    { word: "metal", hint: "Material good conductor of electricity" },
    { word: "rubber", hint: "Elastic material for tires and erasers" },
    { word: "chair", hint: "Furniture used for sitting" },

    // Objects made of wood
    { word: "door", hint: "Entryway made commonly of wood" },
    { word: "chair", hint: "Seating furniture made of wood" },
    { word: "table", hint: "Flat topped piece of furniture" },
    { word: "bed", hint: "Furniture for sleeping" },
    { word: "cupboard", hint: "Wooden furniture with shelves" },
    { word: "bookshelf", hint: "Wooden furniture to hold books" },
    { word: "desk", hint: "Work furniture made from wood" },
    { word: "bench", hint: "Long wooden seat" },
    { word: "cabinet", hint: "Wooden storage unit" },
    { word: "floor", hint: "Wooden surface of room" },

    // Fruits
    { word: "apple", hint: "A common red or green fruit" },
    { word: "banana", hint: "Yellow curved tropical fruit" },
    { word: "mango", hint: "King of fruits, sweet and tropical" },
    { word: "orange", hint: "Citrus fruit and a color" },
    { word: "pineapple", hint: "Tropical fruit with spiky skin" },
    { word: "strawberry", hint: "Red fruit with tiny seeds on outside" },
    { word: "grape", hint: "Small round fruit used in wine" },
    { word: "papaya", hint: "Orange tropical fruit" },
    { word: "blueberry", hint: "Small blue berry good for antioxidants" },
    { word: "kiwi", hint: "Brown fuzzy fruit with green inside" },

    // Vegetables
    { word: "carrot", hint: "Orange crunchy root vegetable" },
    { word: "potato", hint: "Starchy tuber, used in fries" },
    { word: "broccoli", hint: "Green vegetable like a tiny tree" },
    { word: "spinach", hint: "Leafy green vegetable rich in iron" },
    { word: "onion", hint: "Vegetable that makes you cry" },
    { word: "garlic", hint: "Pungent vegetable used for flavor" },
    { word: "cabbage", hint: "Green leafy vegetable for coleslaw" },
    { word: "tomato", hint: "Red fruit often used as vegetable" },
    { word: "cauliflower", hint: "White vegetable similar to broccoli" },
    { word: "pepper", hint: "Can be sweet or spicy vegetable" },

    // Colors
    { word: "red", hint: "A primary color, the color of fire" },
    { word: "blue", hint: "A primary color, sky and ocean" },
    { word: "green", hint: "Color of grass and leaves" },
    { word: "yellow", hint: "Bright color like the sun" },
    { word: "purple", hint: "Color often associated with royalty" },
    { word: "pink", hint: "A pale red color" },
    { word: "black", hint: "Color of night or darkness" },
    { word: "white", hint: "Color of snow and purity" },
    { word: "brown", hint: "Color of wood and earth" },
    { word: "orange", hint: "A blend of red and yellow" },

    // Places
    { word: "london", hint: "Capital city of England" },
    { word: "paris", hint: "City known for the Eiffel Tower" },
    { word: "newyork", hint: "Famous U.S. city with Statue of Liberty" },
    { word: "tokyo", hint: "Capital of Japan, tech hub" },
    { word: "delhi", hint: "Capital of India" },
    { word: "sydney", hint: "Australian city with famous Opera House" },
    { word: "berlin", hint: "Capital city of Germany" },
    { word: "dubai", hint: "City known for luxurious skyscrapers" },
    { word: "rome", hint: "City with ancient ruins in Italy" },
    { word: "moscow", hint: "Capital of Russia" },

    // Countries
    { word: "india", hint: "Country famous for diverse culture and spices" },
    { word: "china", hint: "Country with the Great Wall" },
    { word: "brazil", hint: "Country known for the Amazon rainforest" },
    { word: "canada", hint: "Country known for maple syrup and cold weather" },
    { word: "france", hint: "Country known for Eiffel Tower and wine" },
    { word: "germany", hint: "European country famous for engineering" },
    { word: "japan", hint: "Country of sushi and technology" },
    { word: "australia", hint: "Country and continent famous for reefs" },
    { word: "egypt", hint: "Country with ancient pyramids" },
    { word: "italy", hint: "Country famous for pizza and pasta" },

    // Solar System
    { word: "mercury", hint: "Closest planet to the sun" },
    { word: "venus", hint: "Second planet, hottest in solar system" },
    { word: "earth", hint: "Our home planet" },
    { word: "mars", hint: "Red planet" },
    { word: "jupiter", hint: "Largest planet in solar system" },
    { word: "saturn", hint: "Planet famous for rings" },
    { word: "uranus", hint: "Blue-green planet that spins on its side" },
    { word: "neptune", hint: "Furthest planet from the sun" },
    { word: "pluto", hint: "Dwarf planet formerly considered ninth planet" },
    { word: "moon", hint: "Earth’s natural satellite" },

    // Programming Languages
    { word: "python", hint: "Popular programming language named after a snake" },
    { word: "java", hint: "Widely used programming language for apps" },
    { word: "ruby", hint: "Programming language named after a gemstone" },
    { word: "swift", hint: "Apple’s fast programming language" },
    { word: "kotlin", hint: "Modern language for Android development" },
    { word: "csharp", hint: "Microsoft’s programming language (.NET)" },
    { word: "php", hint: "Server-side scripting language" },
    { word: "javascript", hint: "Language for web development" },
    { word: "typescript", hint: "JavaScript with types" },
    { word: "go", hint: "Google’s open source programming language" },

    // Current Affairs
    { word: "climate", hint: "Related to global weather patterns" },
    { word: "election", hint: "Process to select leaders" },
    { word: "pandemic", hint: "Widespread disease outbreak" },
    { word: "vaccine", hint: "Medicine to prevent diseases" },
    { word: "technology", hint: "Application of scientific knowledge" },
    { word: "education", hint: "Process of learning" },
    { word: "environment", hint: "Natural world around us" },
    { word: "innovation", hint: "Creating new ideas or products" },
    { word: "sustainability", hint: "Meeting present needs without compromising future" },
    { word: "cybersecurity", hint: "Protection against digital attacks" },

    // Objects from the embibe document categories
    { word: "humans", hint: "Living creatures like you and me" },
    { word: "birds", hint: "Feathered creatures that fly" },
    { word: "animals", hint: "Living creatures other than humans" },
    { word: "insects", hint: "Small six-legged creatures" },
    { word: "plants", hint: "Living things that grow in soil" },
    { word: "book", hint: "Non-living item made of paper" },
    { word: "door", hint: "Entryway made of wood or metal" },
    { word: "table", hint: "Furniture that holds items" },
    { word: "plastic", hint: "Synthetic material" },
    { word: "metal", hint: "Hard shiny material" },
    { word: "pencil", hint: "Writing object made with graphite" },
    { word: "paper", hint: "Thin material used for writing" },
    { word: "rubber", hint: "Elastic material" },
    { word: "chair", hint: "Furniture to sit on" },
    { word: "glass", hint: "Transparent solid material" },

    // More living things and objects can be programmatically generated to add up to 1000 entries.

    // Fungi and related organisms
    { word: "mushroom", hint: "A fungi with a stem and cap" },
    { word: "yeast", hint: "Microscopic fungi used in baking" },
    { word: "toadstool", hint: "Poisonous mushroom" },
    { word: "mycelium", hint: "The root structure of fungi" },
    { word: "lichen", hint: "Symbiotic organism of algae and fungi" },

    // Protists and microscopic life
    { word: "amoeba", hint: "Single-celled organism that moves with pseudopods" },
    { word: "paramecium", hint: "Ciliate protozoan often found in ponds" },
    { word: "euglena", hint: "Flagellated protist with plant and animal features" },
    { word: "diatom", hint: "Microscopic algae with silica shell" },
    { word: "plasmodium", hint: "Protozoan that causes malaria" },

    // Ocean creatures
    { word: "coral", hint: "Marine invertebrate forming reefs" },
    { word: "jellyfish", hint: "Gelatinous sea creature with tentacles" },
    { word: "starfish", hint: "Five-armed sea creature" },
    { word: "seahorse", hint: "Fish with curled tail and horse-like head" },
    { word: "krill", hint: "Small crustaceans that whales eat" },

    // Mythical creatures
    { word: "dragon", hint: "Legendary fire-breathing reptile" },
    { word: "unicorn", hint: "Horse-like mythical creature with one horn" },
    { word: "phoenix", hint: "Mythical bird that rises from ashes" },
    { word: "griffin", hint: "Creature with lion body and eagle head" },
    { word: "mermaid", hint: "Half woman, half fish mythical being" },

    // Inventions and technological items
    { word: "telegraph", hint: "Early long-distance communication device" },
    { word: "xerography", hint: "Process used in photocopying" },
    { word: "zeppelin", hint: "Rigid airship" },
    { word: "radar", hint: "Detection system using radio waves" },
    { word: "gyroscope", hint: "Device to measure orientation" },

    // Modern technology terms
    { word: "blockchain", hint: "Distributed ledger technology" },
    { word: "qubit", hint: "Basic unit of quantum computing" },
    { word: "cryptocurrency", hint: "Digital currency secured by cryptography" },
    { word: "biometrics", hint: "Technology measuring physical traits" },
    { word: "nanotechnology", hint: "Manipulation of matter on atomic scale" },

    // Less common living objects and animals
    { word: "axolotl", hint: "Aquatic salamander that retains juvenile features" },
    { word: "narwhal", hint: "Arctic whale with long tusk" },
    { word: "platypus", hint: "Egg-laying mammal with duck bill" },
    { word: "okapi", hint: "Forest giraffe relative from Africa" },
    { word: "quokka", hint: "Small marsupial from Australia" },

    // Non-living natural objects
    { word: "amber", hint: "Fossilized tree resin" },
    { word: "slate", hint: "Fine-grained metamorphic rock" },
    { word: "basalt", hint: "Dark volcanic rock" },
    { word: "mica", hint: "Shiny flaky mineral" },
    { word: "quartz", hint: "Hard crystalline mineral" },

    // More plants and trees
    { word: "bamboo", hint: "Fast-growing woody grass" },
    { word: "sequoia", hint: "Tall giant redwood tree" },
    { word: "cactus", hint: "Spiny desert plant" },
    { word: "moss", hint: "Small non-vascular green plant" },
    { word: "algae", hint: "Usually aquatic photosynthetic organism" },

    // Gemstones & minerals
    { word: "sapphire", hint: "Precious blue gemstone" },
    { word: "emerald", hint: "Green precious gemstone" },
    { word: "topaz", hint: "Yellow or orange gemstone" },
    { word: "amethyst", hint: "Purple quartz gemstone" },
    { word: "jade", hint: "Green ornamental stone" },

    // Miscellaneous natural phenomena
    { word: "aurora", hint: "Natural light display in polar skies" },
    { word: "earthquake", hint: "Sudden shaking of the ground" },
    { word: "tornado", hint: "Violent rotating column of air" },
    { word: "volcano", hint: "Mountain erupting molten rock" },
    { word: "geyser", hint: "Hot spring that shoots water" },

    // Human body related terms
    { word: "xiphoid", hint: "Lower part of the sternum" },
    { word: "patella", hint: "Kneecap bone" },
    { word: "ulna", hint: "One of the forearm bones" },
    { word: "iris", hint: "Colored part of the eye" },
    { word: "femur", hint: "Thigh bone, longest bone in body" },

    // Food items and spices
    { word: "cardamom", hint: "Spice used in chai and desserts" },
    { word: "saffron", hint: "Most expensive spice from crocus" },
    { word: "tamari", hint: "Japanese soy sauce" },
    { word: "quinoa", hint: "Edible seed, high protein grain" },
    { word: "wasabi", hint: "Spicy green Japanese condiment" },

    // Astronomy terms
    { word: "nebula", hint: "Cloud of gas and dust in space" },
    { word: "quasar", hint: "Extremely bright distant celestial object" },
    { word: "pulsar", hint: "Rotating neutron star with pulses" },
    { word: "blackhole", hint: "Region with gravity so strong not even light escapes" },
    { word: "comet", hint: "Icy small solar system body with tail" },

    // Literature and art
    { word: "sonnet", hint: "14-line poem" },
    { word: "fresco", hint: "Painting done rapidly on wet plaster" },
    { word: "haiku", hint: "Japanese three-line poem" },
    { word: "ballad", hint: "Narrative poem or song" },
    { word: "mosaic", hint: "Artwork of small pieces of stone or glass" },

    // Historical events & people
    { word: "renaissance", hint: "European cultural rebirth" },
    { word: "napoleon", hint: "French military leader" },
    { word: "titanic", hint: "Famous doomed ocean liner" },
    { word: "spartacus", hint: "Leader of slave revolt" },
    { word: "cleopatra", hint: "Last active ruler of Ptolemaic Egypt" },

    // Transport & vehicles
    { word: "zeppelin", hint: "Rigid airship" },
    { word: "catamaran", hint: "Boat with two parallel hulls" },
    { word: "scooter", hint: "Two-wheeled motorized vehicle" },
    { word: "tank", hint: "Armored combat vehicle" },
    { word: "rickshaw", hint: "Small two-wheeled cart" },

    // Musical instruments
    { word: "sitar", hint: "Indian plucked string instrument" },
    { word: "ocarina", hint: "Ancient wind instrument" },
    { word: "xylophone", hint: "Musical instrument made of wooden bars" },
    { word: "banjo", hint: "Stringed instrument with round body" },
    { word: "timpani", hint: "Kettle drums in orchestra" },

    // Human senses and body parts
    { word: "cochlea", hint: "Part of inner ear for hearing" },
    { word: "epidermis", hint: "Outer layer of skin" },
    { word: "retina", hint: "Light-sensitive layer in eye" },
    { word: "bronchi", hint: "Air passages in lungs" },
    { word: "appendix", hint: "Small tube attached to large intestine" }


];


let secret, hintText, displayWord, guesses, maxWrong, remainingAttempts;
let wins = 0;

function initGame() {
    // Select a random word/hint pair
    const picked = words[Math.floor(Math.random() * words.length)];
    secret = picked.word.toLowerCase();
    hintText = picked.hint;
    displayWord = Array(secret.length).fill("_");
    guesses = [];
    maxWrong = 6;
    remainingAttempts = maxWrong; // Initialize remaining attempts

    // Render UI
    document.getElementById("hint").textContent = hintText;
    updateDisplay();
    document.getElementById("status-msg").textContent = "";
    document.getElementById("attempts-msg").textContent = `Remaining Attempts: ${remainingAttempts}`;
    document.getElementById("win-msg").textContent = `Games Won: ${wins}`;
    document.getElementById("next-btn").style.display = "none";
    enableInput();
}

function updateDisplay() {
    document.getElementById("displayWord").textContent = displayWord.join(" ");
}

function guessLetter() {
    const input = document.getElementById("letter-input");
    let letter = input.value.trim().toLowerCase();

    // Input validation
    if (!letter.match(/^[a-z]$/)) {
        input.value = "";
        return;
    }

    if (guesses.includes(letter)) {
        document.getElementById("status-msg").textContent = "Already guessed!";
        input.value = "";
        return;
    }
    guesses.push(letter);

    let found = false;
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === letter) {
            displayWord[i] = letter;
            found = true;
        }
    }

    if (!found) {
        remainingAttempts--;
        document.getElementById("attempts-msg").textContent = `Remaining Attempts: ${remainingAttempts}`;
    }

    updateDisplay();
    input.value = "";

    // Game status check
    if (!displayWord.includes("_")) {
        wins++;
        document.getElementById("status-msg").textContent = "🎉 You Won! The word was: " + secret;
        document.getElementById("win-msg").textContent = `Games Won: ${wins}`;
        document.getElementById("next-btn").style.display = "inline-block";
        disableInput();
    } else if (remainingAttempts <= 0) {
        document.getElementById("status-msg").textContent = "😢 Game Over! The word was: " + secret;
        document.getElementById("next-btn").style.display = "inline-block";
        disableInput();
    }
}

function disableInput() {
    document.getElementById("letter-input").disabled = true;
}

function enableInput() {
    document.getElementById("letter-input").disabled = false;
}

function nextGame() {
    document.getElementById("letter-input").value = "";
    initGame();
}

// For Enter key submission
document.getElementById("letter-input").addEventListener("keyup", function (e) {
    if (e.key === "Enter") guessLetter();
});

initGame();
