const topics = [
    {
        image: require('../assets/topics/1.png'),
        name: 'Ancient Egypt: The Wonders of a Timeless Civilization',
        items: [
            {
                image: require('../assets/topics/items/1.png'),
                name: 'The Construction of the Pyramids',
                description: 'The Great Pyramids of Giza stand as monumental symbols of ancient Egypt’s architectural and engineering skills. Built to honor the pharaohs and facilitate their journey to the afterlife, these massive structures were constructed using immense stone blocks transported from quarries. Thousands of skilled laborers, not slaves as often believed, worked on the pyramids using simple tools and methods such as sledges, rollers, and ramps. The precise alignment of the pyramids with the stars and cardinal directions reflects the advanced knowledge of mathematics and astronomy possessed by the ancient Egyptians.'
            },
            {
                image: require('../assets/topics/items/2.png'),
                name: 'The Life of Ancient Egyptian Citizens',
                description: 'Ancient Egyptian society was highly structured. At the top was the pharaoh, followed by priests, scribes, and nobles. The majority of the population consisted of farmers, craftsmen, and laborers. Farmers worked the fertile Nile valley, while artisans crafted pottery, jewelry, and sculptures. Merchants traded goods with neighboring regions, contributing to Egypt’s wealth and cultural exchange. Religion played a central role, with daily life governed by a deep devotion to gods and goddesses, and the priests conducted rituals to ensure prosperity.'
            },
            {
                image: require('../assets/topics/items/3.png'),
                name: 'The Mysteries of Temples and Pyramids',
                description: 'Egypt’s temples, dedicated to various gods, were not just places of worship but hubs of culture and power. These grand structures were filled with detailed carvings and hieroglyphs, narrating stories of the gods and pharaohs. The pyramids were tombs for the pharaohs, filled with treasures for their afterlife. However, many mysteries remain, such as the exact purpose of the Sphinx and the precise alignment of the pyramids. The Sphinx, with its enigmatic expression, continues to spark debate about its role, while the precision of the pyramids’ construction challenges modern understanding.'
            },
        ]
    },
    {
        image: require('../assets/topics/2.png'),
        name: 'Ancient Rome: Power, Glory, and the Everyday Life of Romans',
        items: [
            {
                image: require('../assets/topics/items/4.png'),
                name: 'Gladiatorial Games and Military Conquests',
                description: 'Gladiatorial games were a major spectacle in Ancient Rome, drawing massive crowds to the Colosseum. These brutal fights between trained warriors, criminals, or prisoners of war symbolized both entertainment and the Roman ideals of strength and courage. Victorious gladiators gained fame, wealth, and sometimes even freedom. Meanwhile, Rome’s military conquests expanded its borders across Europe, North Africa, and the Middle East. Roman generals, such as Julius Caesar, played crucial roles in shaping the empire, leading campaigns that brought both glory and political turmoil.'
            },
            {
                image: require('../assets/topics/items/5.png'),
                name: 'The Life of a Common Roman',
                description: 'Daily life in Rome varied greatly depending on social class. Patricians, the aristocratic elite, lived in luxurious villas, while plebeians, or common citizens, worked as farmers, merchants, or artisans. Slaves formed a significant part of the workforce, building roads, aqueducts, and grand structures. The famous Roman roads, still admired today, were essential for trade, military movements, and communication across the vast empire. The Forum served as the heart of Roman life, where people gathered for markets, religious ceremonies, and political discussions.'
            },
            {
                image: require('../assets/topics/items/6.png'),
                name: 'Decisions of an Emperor or General',
                description: 'Ruling the Roman Empire required wisdom, strategy, and sometimes ruthlessness. Emperors like Augustus and Marcus Aurelius made decisions that shaped the empire’s destiny, from economic reforms to military campaigns. Generals had to choose battle strategies, negotiate alliances, and control rebellions. The Senate, though originally powerful, eventually became more symbolic under imperial rule, with real power concentrated in the hands of the emperor. The balance between maintaining order and expanding the empire often determined the success or downfall of Rome’s leaders.'
            },
        ]
    },
    {
        image: require('../assets/topics/3.png'),
        name: 'Medieval Era: Chivalry, Mysticism, and Power Struggles',
        items: [
            {
                image: require('../assets/topics/items/7.png'),
                name: 'Knightly Tournaments, Castle Building, and the Struggle for Power',
                description: 'The medieval era was an age of knights, kings, and castles. Tournaments were held across Europe, where knights demonstrated their combat skills in jousting and melee battles to gain fame and favor from nobles. Castles, built as symbols of power and military strongholds, housed feudal lords who governed vast lands. The feudal system structured medieval society, with kings granting land to nobles in exchange for loyalty, while peasants worked the fields under harsh conditions. Political intrigue, betrayals, and wars for succession often shaped the fate of entire kingdoms.'
            },
            {
                image: require('../assets/topics/items/8.png'),
                name: 'Alchemy, Healing, and the Search for Knowledge',
                description: 'Beyond the battlefield, the Middle Ages were also a time of intellectual and mystical pursuits. Alchemists sought to transform base metals into gold and discover the elixir of life, laying the groundwork for early chemistry. Healers, often monks or wise women, used herbal medicine to treat the sick, though superstition still influenced medical practices. Philosophers debated the nature of existence, blending ancient knowledge with religious teachings. Mysticism, astrology, and secret societies flourished, shaping medieval thought and scientific inquiry.'
            },
            {
                image: require('../assets/topics/items/9.png'),
                name: 'The Black Death, Crusades, and the Rise of the Church',
                description: 'The medieval era was marked by both devastation and religious fervor. The Black Death, one of the deadliest pandemics in history, wiped out nearly a third of Europe’s population, leading to social and economic upheaval. The Crusades, a series of religious wars, saw European knights marching to the Holy Land to reclaim it from Muslim rule, leaving a lasting impact on relations between cultures. Meanwhile, the Catholic Church became a dominant force, influencing politics, education, and daily life. Popes and clergy wielded immense power, sometimes rivaling kings, while monastic orders preserved knowledge that would later spark the Renaissance.'
            },
        ]
    },
    {
        image: require('../assets/topics/4.png'),
        name: 'Renaissance: The Age of Art, Science, and Discovery',
        items: [
            {
                image: require('../assets/topics/items/10.png'),
                name: 'Great Discoveries and the Masters of Renaissance Art',
                description: 'The Renaissance was a period of extraordinary artistic and intellectual achievement. Visionaries like Leonardo da Vinci and Michelangelo pushed the boundaries of creativity, producing masterpieces such as The Last Supper and The Sistine Chapel Ceiling. Their work blended technical skill with deep human emotion, shaping the future of art. Meanwhile, great discoveries in geography and science expanded the known world. Explorers like Christopher Columbus and Vasco da Gama ventured across the oceans, while astronomers such as Copernicus and Galileo redefined humanity’s understanding of the universe.'
            },
            {
                image: require('../assets/topics/items/11.png'),
                name: 'The Revival of Science, Philosophy, and the Arts',
                description: 'The Renaissance was driven by a renewed interest in classical knowledge. Scholars translated and studied ancient Greek and Roman texts, merging them with new ideas. Philosophy flourished as thinkers like Machiavelli explored politics and power, while scientific advancements in anatomy, engineering, and astronomy laid the foundation for modern disciplines. The printing press, invented by Johannes Gutenberg, revolutionized the spread of knowledge, making books and education accessible to a wider audience.'
            },
            {
                image: require('../assets/topics/items/12.png'),
                name: 'The Influence of Popes and Monarchs on Culture',
                description: 'Art and culture thrived under the patronage of powerful figures. The Catholic Church, led by influential popes, funded grand artistic projects to showcase its power, commissioning works from Raphael and Botticelli. Monarchs across Europe, including the Medici family in Florence and Francis I of France, supported artists, scientists, and architects, transforming their cities into centers of culture. This blend of political ambition and artistic excellence defined the Renaissance, leaving behind a legacy of beauty, knowledge, and human achievement.'
            },
        ]
    },
    {
        image: require('../assets/topics/5.png'),
        name: 'Victorian England: Innovation, Mystery, and Empire',
        items: [
            {
                image: require('../assets/topics/items/13.png'),
                name: 'Sherlock Holmes and the Era of Mystery',
                description: 'The Victorian era was the golden age of detective fiction, with Arthur Conan Doyle’s Sherlock Holmes becoming a cultural icon. Set against the foggy streets of London, Holmes solved complex crimes using logic and deduction, reflecting the growing fascination with science and forensic investigation. The era’s obsession with mysteries extended beyond fiction, as real-life cases like Jack the Ripper’s murders captivated the public.'
            },
            {
                image: require('../assets/topics/items/14.png'),
                name: 'The Industrial Revolution and Social Change',
                description: 'The rapid expansion of industry transformed Britain into a global powerhouse. Steam engines, railways, and factories reshaped cities, bringing both progress and hardship. The rise of the working class led to social reforms, while inventions like the telegraph and electricity revolutionized communication. Education and science flourished, with Charles Darwin’s Theory of Evolution challenging traditional beliefs.'
            },
            {
                image: require('../assets/topics/items/15.png'),
                name: 'The British Empire at Its Peak',
                description: 'During Queen Victoria’s reign, the British Empire expanded across the globe, controlling vast territories in Asia, Africa, and beyond. This era saw immense economic growth but also sparked debates about imperialism and its impact on colonized nations. The Victorian mindset, driven by exploration and ambition, left a lasting influence on modern politics, technology, and literature.'
            },
        ]
    },
    {
        image: require('../assets/topics/6.png'),
        name: 'Age of Enlightenment: The Era of Reason and Revolution',
        items: [
            {
                image: require('../assets/topics/items/16.png'),
                name: 'Revolutions, Social Change, and the Birth of Modern Society',
                description: 'The Enlightenment was a period of intellectual awakening that reshaped the world. It fueled major revolutions, such as the American and French Revolutions, which overthrew monarchies and established democratic ideals. Society began shifting away from rigid traditions, embracing reason, liberty, and equality. Education became more widespread, and the idea that all individuals deserved fundamental rights gained momentum.'
            },
            {
                image: require('../assets/topics/items/17.png'),
                name: 'Philosophers Who Shaped the Future',
                description: 'Great thinkers like Voltaire, Rousseau, and Montesquieu challenged established authority, questioning the power of the Church and absolute monarchs. Voltaire fought for freedom of speech and religious tolerance, while Rousseau introduced ideas about democracy and the social contract, inspiring future governments. Montesquieu’s theories on the separation of powers influenced the foundations of modern political systems.'
            },
            {
                image: require('../assets/topics/items/18.png'),
                name: 'Science, Human Rights, and the Power of Debate',
                description: 'The Enlightenment was also an age of scientific breakthroughs. Isaac Newton’s discoveries revolutionized physics, while medical advancements improved public health. Philosophical debates on human rights led to groundbreaking documents like the Declaration of the Rights of Man and of the Citizen, setting the stage for modern democracy. This era marked the triumph of reason over superstition, laying the groundwork for the modern world.'
            },
        ]
    },
    {
        image: require('../assets/topics/7.png'),
        name: 'Ancient Greece: The Birthplace of Civilization',
        items: [
            {
                image: require('../assets/topics/items/19.png'),
                name: 'Democracy, Philosophy, and the Olympic Games',
                description: 'Ancient Greece is known as the birthplace of democracy, where citizens of Athens debated and voted on laws, shaping early political systems. Philosophers like Socrates, Plato, and Aristotle explored ethics, logic, and the nature of existence, laying the foundation for Western thought. The Olympic Games, held every four years in Olympia, celebrated athleticism and honored the gods, becoming a tradition that still thrives today.'
            },
            {
                image: require('../assets/topics/items/20.png'),
                name: 'Political Debates and Mythology',
                description: 'Athens and Sparta represented two contrasting political systems—one focused on democracy and culture, the other on military strength. Public debates in the Athenian Agora influenced governance, while myths of gods like Zeus, Athena, and Poseidon shaped religious and artistic life. The legendary stories of heroes like Hercules and Achilles inspired generations, blending history with myth.'
            },
            {
                image: require('../assets/topics/items/21.png'),
                name: 'Battles and Architectural Wonders',
                description: 'The Battle of Marathon showcased Greek resilience against Persian invaders, while the naval triumph at Salamis secured Greek dominance. Magnificent temples like the Parthenon honored the gods, demonstrating advanced architectural and artistic skills. Exploring these ruins today reveals the ingenuity of a civilization that laid the groundwork for modern governance, philosophy, and culture.'
            },
        ]
    },
    {
        image: require('../assets/topics/8.png'),
        name: 'Industrial Renaissance: The Age of Innovation and Progress',
        items: [
            {
                image: require('../assets/topics/items/22.png'),
                name: 'Revolutionary Inventions and Scientific Breakthroughs',
                description: 'The Industrial Renaissance marked a turning point in human history, with groundbreaking inventions transforming everyday life. Steam engines revolutionized transportation, factories increased production, and mechanized agriculture boosted food supply. Innovations like the telegraph, electric light, and early automobiles paved the way for modern technology.'
            },
            {
                image: require('../assets/topics/items/23.png'),
                name: 'Mechanics, Steam Power, and the Rise of Industry',
                description: 'Steam power fueled rapid industrialization, leading to the growth of railways, textile mills, and steel production. Engineers and scientists refined mechanical systems, enhancing efficiency in manufacturing and transportation. Scientific discoveries in chemistry, physics, and medicine pushed the boundaries of knowledge, improving living standards and global connectivity.'
            },
            {
                image: require('../assets/topics/items/24.png'),
                name: 'Social and Political Transformations',
                description: 'Industrialization reshaped society, leading to urbanization and the rise of working-class movements. While new job opportunities emerged, harsh factory conditions sparked debates on workers’ rights and labor laws. Political systems adapted to the growing influence of industry, with economic power shifting towards industrialized nations. This era laid the foundation for the modern world, shaping technology, politics, and society for centuries to come.'
            },
        ]
    },
];

export default topics;