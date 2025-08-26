const pluralize = (count, unit) => {
  if (count === 1) return `${unit} واحدة`;
  if (count === 2) return `${unit}تين`;
  if (count >= 3 && count <= 10) return `${count} ${unit}`;
  return `${count} ${unit}`;
};

const timeAgo = (dateString) => {
  const now = new Date();
  const past = new Date(dateString);
  const diffInSeconds = Math.floor((now - past) / 1000);

  if (diffInSeconds < 60) return "منذ ثوانٍ";
  
  const intervals = [
    { label: 'سنة', seconds: 31536000 },
    { label: 'شهر', seconds: 2592000 },
    { label: 'أسبوع', seconds: 604800 },
    { label: 'يوم', seconds: 86400 },
    { label: 'ساعة', seconds: 3600 },
    { label: 'دقيقة', seconds: 60 },
  ];

  for (let interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      return `منذ ${pluralize(count, interval.label)}`;
    }
  }

  return 'الآن';
};

export default timeAgo;