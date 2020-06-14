const colors = {
  green: 'rgba(75, 192, 192, 1)',
  red: 'rgba(255, 99, 132, 1)',
  blue: 'rgba(54, 162, 235, 1)',
  yellow: 'rgba(255, 206, 86, 1)',
  purple: 'rgba(153, 102, 255, 1)',
  orange: 'rgba(255, 159, 64, 1)',
  'gitlab-yellow': 'rgba(240, 166, 70, 1)',
  'gitlab-orange': 'rgba(235, 117, 60, 1)',
  'gitlab-red': 'rgba(209, 79, 54, 1)',
};

export const statusToColor = {
  success: colors.green,
  failed: colors.red,
  canceled: colors.blue,
};

export default colors;
