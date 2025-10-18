// AI content generation service
// By default, returns a placeholder draft in English and Polish.
// To enable real AI generation (e.g., OpenAI), set OPENAI_API_KEY in .env
// and replace the generatePost implementation accordingly.

async function generatePost({ topic, tone = 'informative', keywords = [] }) {
  // Placeholder content. Replace with real AI calls if desired.
  const kw = Array.isArray(keywords) ? keywords.join(', ') : '';
  return {
    en: {
      title: `Diving Insight: ${topic}`,
      content: `Introduction\n\n${topic} is a fascinating aspect of scuba diving. This post covers ${kw || 'key concepts'} in an ${tone} tone.\n\nSafety\n\nAlways follow standard procedures, check your gear, and dive within your limits.\n\nTechniques\n\nPractice buoyancy control, proper finning, and breathing patterns for efficient, relaxed dives.\n\nSummary\n\nKeep learning, respect the ocean, and enjoy every dive.`,
    },
    pl: {
      title: `Wiedza Nurkowa: ${topic}`,
      content: `Wprowadzenie\n\n${topic} to fascynujący aspekt nurkowania. Ten wpis omawia ${kw || 'kluczowe zagadnienia'} w tonie ${tone}.\n\nBezpieczeństwo\n\nZawsze przestrzegaj procedur, sprawdzaj sprzęt i nurkuj w granicach swoich umiejętności.\n\nTechniki\n\nĆwicz kontrolę pływalności, właściwe kopnięcia i rytm oddechu, aby nurkować wydajnie i spokojnie.\n\nPodsumowanie\n\nUcz się dalej, szanuj ocean i ciesz się każdym nurkowaniem.`,
    },
    tags: keywords,
  };
}

module.exports = { generatePost };

