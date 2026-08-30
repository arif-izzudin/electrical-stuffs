---
title: 'Spherical Coordinate System: Physics Convention, Transformations & Lecture Deck'
description: 'Spherical coordinates (r, theta, phi) with the physics convention: coordinate surfaces, notation comparisons, transformation matrices, and solved conversion problems.'
category: 'Mathematics'
tags:
  [
    'spherical coordinate system',
    'physics convention',
    'coordinate transformation',
    'transformation matrix',
    'polar angle',
    'azimuthal angle',
    'electromagnetics',
  ]
date: '2026-09-02'
pdf: '/decks/unit-4-spherical-coordinate-system.pdf'
author: 'Engineering Content Architect'
seo:
  title: 'Spherical Coordinates - Conventions, Transformation Matrices & Examples'
  description: 'Spherical coordinate system in the physics convention (r, theta, phi): coordinate surfaces, notation comparisons, transformation matrices, and solved conversions.'
  keywords:
    [
      'spherical coordinates',
      'cartesian to spherical conversion',
      'spherical coordinate transformation matrix',
      'polar angle vs azimuthal angle',
    ]
schemaOrg:
  type: 'TechArticle'
  headline: 'Spherical Coordinate System: Conventions, Transformation Matrices & Worked Examples'
  proficiencyLevel: 'Intermediate'
---

# Spherical Coordinate System: Physics Convention, Transformations & Lecture Deck

Unit 4 of the coordinate systems course: the spherical coordinate system $(r, \theta, \phi)$
in the physics/electromagnetics convention, a comparison of the mathematics, Wolfram, and ISO
80000-2 notations, coordinate surfaces, position vectors, and the forward/inverse
transformation matrices between rectangular and spherical components. Scroll the deck below,
open it full-screen, or download the PDF.

::deck-embed{src="/decks/unit-4-spherical-coordinate-system.pdf" label="Unit 4 - Spherical Coordinate System"}
::

::seo-strip
## Key formulas

- Coordinates and ranges (physics convention): $(r, \theta, \phi)$ with $r \ge 0$,
  $0 \le \theta \le \pi$, $0 \le \phi < 2\pi$
- Cartesian to spherical: $r = \sqrt{x^2 + y^2 + z^2}$,
  $\theta = \cos^{-1}(z/r)$, $\phi = \tan^{-1}(y/x)$ (quadrant-adjusted)
- Spherical to Cartesian: $x = r\sin\theta\cos\phi$,
  $y = r\sin\theta\sin\phi$, $z = r\cos\theta$
- Position vector: $\mathbf{r} = r\,\mathbf{a}_r$
- Spherical-to-rectangular transformation: $[\mathbf{A}]_{xyz} = T^{T} [\mathbf{A}]_{r\theta\phi}$
  with $T^{T} = T^{-1}$ (orthonormal basis)

## Quick answers

- **What are spherical coordinates?** A triple $(r, \theta, \phi)$ locating a point by radial
  distance from the origin, polar angle from the $+z$-axis, and azimuthal angle in the
  $xy$-plane &mdash; the natural system for point charges, radiation patterns, and spherical
  shells.
- **Physics or mathematics convention?** Physics/electromagnetics measures $\theta$ from the
  $+z$-axis and $\phi$ in the $xy$-plane; the mathematics convention swaps the two letters.
  This course follows the physics convention.
- **How do you convert Cartesian to spherical coordinates?** Compute
  $r = \sqrt{x^2 + y^2 + z^2}$, $\theta = \cos^{-1}(z/r)$, and
  $\phi = \tan^{-1}(y/x)$ with quadrant adjustment.
- **Why is the position vector just $r\,\mathbf{a}_r$?** The spherical basis points radially
  outward from the origin, so the position vector has a single component along
  $\mathbf{a}_r$ &mdash; unlike $\mathbf{a}_\rho$, $\mathbf{a}_\theta$ and $\mathbf{a}_\phi$
  both vary with position.
::
