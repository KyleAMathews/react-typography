// @flow
import gray from 'gray-percentage'
import type { OptionsType } from 'Types'
import { MOBILE_MEDIA_QUERY, TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'

const theme: OptionsType = {
  title: 'Sutro',
  baseFontSize: '18px',
  baseLineHeight: '32px',
  googleFonts: [
    {
      name: 'Open Sans',
      styles: [
        '700',
      ],
    },
    {
      name: 'Merriweather',
      styles: [
        '300',
        '300i',
        '700',
        '700i',
      ],
    },
  ],
  headerFontFamily: ['Open Sans', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'Georgia', 'serif'],
  headerGray: 10,
  bodyGray: 10,
  headerWeight: 700,
  bodyWeight: 300,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, adjustFontSizeToMSValue, rhythm }, options) => ({
    a: {
      color: '#f92300',
      textDecoration: 'none',
    },
    'a:hover,a:active': {
      textDecoration: 'underline',
    },
    blockquote: {
      ...adjustFontSizeToMSValue(1/5),
      color: gray(41),
      fontStyle: 'italic',
      paddingLeft: rhythm(13/16),
      marginLeft: 0,
      borderLeft: `${rhythm(3/16)} solid ${gray(80)}`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: gray(options.bodyGray),
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    ul: {
      listStyle: 'disc',
    },
    'ul,ol': {
      marginLeft: 0,
    },
    [MOBILE_MEDIA_QUERY]: {
      'ul,ol': {
        marginLeft: rhythm(1),
      },
      blockquote: {
        marginLeft: rhythm(-3/4),
        marginRight: 0,
        paddingLeft: rhythm(9/16),
      },
    },
    [TABLET_MEDIA_QUERY]: {
      h1: {
        ...adjustFontSizeToMSValue(5/5),
      },
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(2),
    },
    h1: {
      ...adjustFontSizeToMSValue(6/5),
      letterSpacing: '-2px',
    },
    h6: {
      fontStyle: 'italic',
    },
  }),
}

export default theme
