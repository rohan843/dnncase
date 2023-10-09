# Machine Learning

## Contents

- [Machine Learning](#machine-learning)
  - [Contents](#contents)
  - [Scope of this Article](#scope-of-this-article)
  - [A Definition](#a-definition)
  - [Relevance to DNNCASE](#relevance-to-dnncase)
    - [Parametric models](#parametric-models)
  - [References](#references)

## Scope of this Article

Machine learning is a large field, and being a superset of deep learning, it has greatly expanded in the recent years.

Documenting the complete area of machine would be far beyond the scope of this doc. file. Instead, here we would like to go over the most basic and fundamental concepts that define machine learning. Those concepts are broadly discussed in the context of our system, but are not limited to neural networks.

## A Definition

Tom Mitchell in his book 'Machine Learning' defines it in this manner [1]:

> A `computer program` is said to learn from `experience E` with respect to some class of `tasks T` and `performance measure P`, _if its performance at tasks in T, as measured by P, improves with experience E_.

This can be broken down as follows:

1. `Computer Program`: This is the learning algorithm that we are trying to train. For example, a neural network.
2. `Task T`: This is the task that we want to train our learning algorithm for. For example, an image classification task where we classify an image as a dog image or a cat image.
3. `Experience E`: This is the _data_ that we use to train our learning algorithm. It may be labelled or unlabelled. Note that from a pure mathematical standpoint, **data is treated like constants, not variables when training an algorithm**.
4. `Performance Measure P`: This is also called the _loss function or cost function or accuracy_, depending on context. When dealing with a single labelled data point (rather rare), we usually refer to it by a loss function. In the more common case of a labelled dataset, we may refer to this as a cost function (perhaps an average of all losses as calculated from a single data point). In the most generic case, we don't even need a labelled dataset. Any dataset works (depending on things such as task as well). Here, we usually measure performance by a generic accuracy metric. This is the case in decision trees. In DNNCASE, our focus is mainly on layered neural networks that require labelled data, so a loss/cost function is a must to be able to train the network, but we may use other accuracy metrics to gain insights from training processes too.

## Relevance to DNNCASE

The above discussion may have been a mouthful! In this section, we break it down to simpler terms in the context of DNNCASE.

Recall that currently DNNCASE is built with neural networks in mind. This means that our focus is on parametric models.

Let's quickly review what these are.

### Parametric models

Say we have a function $F(x)$. This function may be expanded as follows:

$$
F(x) = \theta_{1} * x_{1} + \theta_{2} * x_{2} + ... + \theta_{n} * x_{n} + \theta_{0}
     = \sum_{i = 1}^n (\theta_{i} * x_{i}) + \theta_{0}
$$

Here, all the $\theta_{i}$'s are the various parameters of this model, and $x$ is an $n$-dimensional array.

You may have guessed already what model this is. This is the common and well-known `linear regression` model. It is widely used in predicting the value of an unknown, $F(x)$, given the value of lots of knowns, i.e., $x_{i}$'s.

> **A side note**: This is probably the most simplest neural network one encounters. It has a dense layer with linear activation, or, as Keras would describe it:
>
> ```py
> n = some_integer_value  # The dimentions in input
>
> x = Input(input_shape=(n))
> result = Dense(1, activation='linear')(x)
>
> F = Model(inputs=x, outputs=result)
> ```

## References

[1]: T. M. Mitchell, "1.1 WELL-POSED LEARNING PROBLEMS," in Machine learning, Massachusetts: WCB McGraw-Hill, 1997, pp. 2–2.
