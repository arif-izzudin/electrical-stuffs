---
title: 'Basic Mathematical Operations on Vectors: Complete Derivations & Lecture Deck'
description: 'Vector operations masterclass: scalar multiplication, addition, dot and cross products with worked Coulomb, torque, and Lorentz force examples in the full lecture deck.'
category: 'Mathematics'
tags:
  [
    'vector operations',
    'dot product',
    'cross product',
    'scalar triple product',
    'vector addition',
    'coulomb force',
    'torque',
  ]
date: '2026-08-31'
pdf: '/decks/unit-2-vector-operations.pdf'
author: 'Engineering Content Architect'
seo:
  title: 'Vector Operations - Dot Product, Cross Product & Worked Examples'
  description: 'Scalar multiplication, vector addition, dot and cross products, and triple products with solved Coulomb force, work, torque, and Lorentz force problems.'
  keywords:
    [
      'dot product formula',
      'cross product determinant',
      'vector addition',
      'scalar triple product',
      'work done by force',
    ]
schemaOrg:
  type: 'TechArticle'
  headline: 'Basic Mathematical Operations on Vectors: Dot Product, Cross Product & Applications'
  proficiencyLevel: 'Beginner'
---

# Basic Mathematical Operations on Vectors: Complete Derivations & Lecture Deck

Unit 2 of the coordinate systems course: scalar multiplication, vector addition and
subtraction (midpoint, centre of mass, distance between points), the dot product with work
and projection applications, the cross product with torque, Lorentz force and area-vector
applications, and scalar triple products. Scroll the deck below, open it full-screen, or
download the PDF.

::deck-embed{src="/decks/unit-2-vector-operations.pdf" label="Unit 2 - Basic Mathematical Operations on Vectors"}
::

::seo-strip
## Key formulas

- Scalar multiplication: $k\mathbf{A} = \begin{bmatrix} kA_x & kA_y & kA_z \end{bmatrix}^T$
- Vector addition and subtraction (component-wise):
  $\mathbf{A} \pm \mathbf{B} = \begin{bmatrix} A_x \pm B_x & A_y \pm B_y & A_z \pm B_z \end{bmatrix}^T$
- Dot product: $\mathbf{A} \cdot \mathbf{B} = |\mathbf{A}|\,|\mathbf{B}|\cos\theta
  = A_xB_x + A_yB_y + A_zB_z$
- Angle between vectors: $\theta = \cos^{-1}\!\left( \frac{\mathbf{A} \cdot \mathbf{B}}
  {|\mathbf{A}|\,|\mathbf{B}|} \right)$
- Cross product (determinant form):
  $\mathbf{A} \times \mathbf{B} = \begin{vmatrix} \mathbf{a}_x & \mathbf{a}_y & \mathbf{a}_z \\
  A_x & A_y & A_z \\ B_x & B_y & B_z \end{vmatrix}$, with magnitude
  $|\mathbf{A} \times \mathbf{B}| = |\mathbf{A}|\,|\mathbf{B}|\sin\theta$
- Work done by a force: $W = \mathbf{F} \cdot \mathbf{d}$
- Torque (moment of a force): $\boldsymbol{\tau} = \mathbf{r} \times \mathbf{F}$
- Lorentz force: $\mathbf{F} = q(\mathbf{v} \times \mathbf{B})$
- Scalar triple product (parallelepiped volume):
  $V = |\mathbf{A} \cdot (\mathbf{B} \times \mathbf{C})|$

## Quick answers

- **How do you compute the dot product of two vectors?** Multiply corresponding components
  and sum: $\mathbf{A} \cdot \mathbf{B} = A_xB_x + A_yB_y + A_zB_z$; the result is a scalar
  equal to $|\mathbf{A}||\mathbf{B}|\cos\theta$.
- **How do you compute the cross product?** Evaluate the $3 \times 3$ determinant with the
  unit vectors in the first row; the result is a vector perpendicular to both operands, with
  direction given by the right-hand rule.
- **When is the cross product zero?** When the vectors are parallel ($\theta = 0$ or
  $180^{\circ}$, $\sin\theta = 0$); in particular $\mathbf{A} \times \mathbf{A} = \mathbf{0}$.
- **What does a zero scalar triple product mean?** The three vectors are coplanar
  (linearly dependent) &mdash; the parallelepiped they form has zero volume.
::
