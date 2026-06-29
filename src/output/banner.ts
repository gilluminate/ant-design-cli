import cfonts from 'cfonts';

function shouldUseTerminalColor(): boolean {
  return Boolean(process.stdout.isTTY && !process.env.NO_COLOR && process.env.TERM !== 'dumb');
}

export function createHelpBanner(version: string, color = shouldUseTerminalColor()): string {
  const wordmark = cfonts.render('ANT|DESIGN|CLI', {
    align: 'left',
    colors: color ? ['#1677ff', '#13c2c2', '#9254de'] : ['system'],
    font: 'tiny',
    gradient: color,
    independentGradient: true,
    letterSpacing: 0,
    lineHeight: 0,
    maxLength: '0',
    space: false,
  }) as { string: string };
  const label = `@ant-design/cli v${version}`;

  const banner = wordmark.string
    .split('\n')
    .map((line) => line.trimEnd())
    .join('\n')
    .trimEnd();

  return `${banner}\n\n${label}\n`;
}
