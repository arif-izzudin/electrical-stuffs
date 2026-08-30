---
title: 'Cylindrical Coordinate System: ISO 31-11 Notation, Transformations & Lecture Deck'
description: 'Cylindrical coordinates (rho, phi, z) explained: ISO 31-11 notation, coordinate surfaces, transformation matrices, and worked Cartesian-cylindrical conversion examples.'
category: 'Mathematics'
tags:
  [
    'cylindrical coordinate system',
    'iso 31-11',
    'coordinate transformation',
    'transformation matrix',
    'position vector',
    'unit vectors',
    'electromagnetics',
  ]
date: '2026-09-01'
pdf: '/decks/unit-3-cylindrical-coordinate-system.pdf'
author: 'Engineering Content Architect'
seo:
  title: 'Cylindrical Coordinates - Transformations, Matrices & Solved Examples'
  description: 'Cylindrical coordinate system with ISO 31-11 notation: coordinate surfaces, Cartesian-cylindrical transformation equations, matrix form, and worked conversions.'
  keywords:
    [
      'cylindrical coordinates',
      'cartesian to cylindrical conversion',
      'cylindrical coordinate transformation matrix',
      'cylindrical unit vectors',
    ]
schemaOrg:
  type: 'TechArticle'
  headline: 'Cylindrical Coordinate System: Transformations, Matrices & Worked Examples'
  proficiencyLevel: 'Intermediate'
---

# Cylindrical Coordinate System: ISO 31-11 Notation, Transformations & Lecture Deck

Unit 3 of the coordinate systems course: the cylindrical coordinate system $(\rho, \phi, z)$
in ISO 31-11 notation, coordinate surfaces, position and distance vectors, the moving basis
$(\mathbf{a}_\rho, \mathbf{a}_\phi, \mathbf{a}_z)$, and the forward/inverse transformation
matrices between rectangular and cylindrical components. Scroll the deck below, open it
full-screen, or download the PDF.

::deck-embed{src="/decks/unit-3-cylindrical-coordinate-system.pdf" label="Unit 3 - Cylindrical Coordinate System"}
::

::seo-strip
## Key formulas

- Coordinates and ranges (ISO 31-11): $(\rho, \phi, z)$ with $\rho \ge 0$,
  $0 \le \phi < 2\pi$, $-\infty < z < \infty$
- Cartesian to cylindrical: $\rho = \sqrt{x^2 + y^2}$,
  $\phi = \tan^{-1}(y/x)$ (quadrant-adjusted), $z = z$
- Cylindrical to Cartesian: $x = \rho\cos\phi$, $y = \rho\sin\phi$, $z = z$
- Position vector: $\mathbf{r} = \rho\cos\phi\,\mathbf{a}_x + \rho\sin\phi\,\mathbf{a}_y
  + z\,\mathbf{a}_z$
- Cylindrical unit vectors in terms of rectangular ones:
  $\mathbf{a}_\rho = \cos\phi\,\mathbf{a}_x + \sin\phi\,\mathbf{a}_y$,
  $\mathbf{a}_\phi = -\sin\phi\,\mathbf{a}_x + \cos\phi\,\mathbf{a}_y$,
  $\mathbf{a}_z = \mathbf{a}_z$
- Distance between two points:
  $d = \sqrt{\rho_1^2 + \rho_2^2 - 2\rho_1\rho_2\cos(\phi_2 - \phi_1) + (z_2 - z_1)^2}$

## Quick answers

- **What are cylindrical coordinates?** A triple $(\rho, \phi, z)$ locating a point by radial
  distance from the $z$-axis, azimuthal angle in the $xy$-plane from the $+x$-axis, and
  height &mdash; the natural system for fields around wires, coaxial cables, and pipes.
- **How do you convert Cartesian to cylindrical coordinates?** Compute
  $\rho = \sqrt{x^2 + y^2}$, $\phi = \tan^{-1}(y/x)$ (add $180^{\circ}$ in the second
  quadrant), and keep $z$ unchanged.
- **Why do cylindrical unit vectors move?** $\mathbf{a}_\rho$ and $\mathbf{a}_\phi$ depend on
  the azimuthal angle $\phi$, rotating as the point moves around the $z$-axis; only
  $\mathbf{a}_z$ is fixed, so the position vector itself is always built from Cartesian base
  vectors.
- **Is it $\rho$ or $r$?** ISO 31-11 prescribes $\rho$ for the radial distance; much of the
  engineering literature writes $r$ &mdash; read carefully to avoid confusion.
::
