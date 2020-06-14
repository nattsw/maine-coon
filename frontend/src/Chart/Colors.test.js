import colors, { statusToColor } from './Colors';

describe('Colors', () => {
  it('returns a set of colours', () => {
    expect(colors).toEqual({
      blue: 'rgba(54, 162, 235, 1)',
      'gitlab-orange': 'rgba(235, 117, 60, 1)',
      'gitlab-red': 'rgba(209, 79, 54, 1)',
      'gitlab-yellow': 'rgba(240, 166, 70, 1)',
      green: 'rgba(75, 192, 192, 1)',
      orange: 'rgba(255, 159, 64, 1)',
      purple: 'rgba(153, 102, 255, 1)',
      red: 'rgba(255, 99, 132, 1)',
      yellow: 'rgba(255, 206, 86, 1)',
    });
  });
});

describe('status to color', () => {
  it('returns a map of status to color', () => {
    expect(statusToColor).toEqual({
      success: 'rgba(75, 192, 192, 1)',
      failed: 'rgba(255, 99, 132, 1)',
      canceled: 'rgba(54, 162, 235, 1)',
    });
  });
});
