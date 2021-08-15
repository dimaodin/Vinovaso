export const landingTransitions = {
    landingContainer: {
        animate: {
            transition: {
                staggerChildren: .25
            }
        }
    },
    header: {
        animate: {
            transition: {
                staggerChildren: .15
            }
        },
        children: {
            animate: {
                opacity: 1,
                transition: {
                    duration: .8
                }
            },
            initial: {
                opacity: 0,
            }
        }
    },
    carousel: {
        animate: {
            opacity: 1,
            transition: {
                duration: 1
            }
        },
        initial: {
            opacity: 0,
        },
        mobile: {
            inc: {
                mainImg: {
                    initial: {
                        opacity: 0,
                        x: '-100%',
                        y: '-50%',
                        scale: .8,
                        transition: {
                            duration: .5
                        }
                    },
                    exit: {
                        opacity: 0,
                        x: '-0%',
                        y: '-50%',
                        scale: .8,
                        transition: {
                            duration: .5
                        }
                    },
                    animate: {
                        opacity: 1,
                        x: '-50%',
                        y: '-50%',
                        scale: 1,
                        transition: {
                            duration: .5
                        }
                    }
                },
                rightImg: {
                    initial: {
                        x: '-50%',
                        y: '-50%',
                        scale: 1,
                        opacity: 1
                    },
                    animate: {
                        x: '0%',
                        y: '-50%',
                        scale: .8,
                        opacity: .5,
                        transition: {
                            duration: .5
                        }
                    },
                    exit: {
                        x: '50%',
                        y: '-50%',
                        opacity: 0,
                        transition: {
                            duration: .5
                        }
                    }
                },
                leftImg: {
                    initial: {
                        x: '-50%',
                        y: '-50%',
                        scale: .8,
                        opacity: 0
                    },
                    animate: {
                        x: '0%',
                        y: '-50%',
                        scale: .8,
                        opacity: .5,
                        transition: {
                            duration: .5
                        }
                    },
                    exit: {
                        x: '50%',
                        y: '-50%',
                        scale: 1,
                        transition: {
                            duration: .5
                        }
                    }
                }
            },
            dec: {
                mainImg: {
                    initial: {
                        opacity: 0,
                        x: '0%',
                        y: '-50%',
                        scale: .8,
                        transition: {
                            duration: .5
                        }
                    },
                    exit: {
                        opacity: 0,
                        x: '-100%',
                        y: '-50%',
                        scale: .8,
                        transition: {
                            duration: .5
                        }
                    },
                    animate: {
                        opacity: 1,
                        x: '-50%',
                        y: '-50%',
                        scale: 1,
                        transition: {
                            duration: .5,
                        }
                    },
                },
                rightImg: {
                    initial: {
                        x: '50%',
                        y: '-50%',
                        scale: .8,
                        opacity: 0
                    },
                    animate: {
                        x: '0%',
                        y: '-50%',
                        scale: .8,
                        opacity: .5,
                        transition: {
                            duration: .5
                        }
                    },
                    exit: {
                        x: '-50%',
                        y: '-50%',
                        opacity: .5,
                        scale: 1,
                        transition: {
                            duration: .5
                        }
                    }
                },
                leftImg: {
                    initial: {
                        x: '50%',
                        y: '-50%',
                        scale: 1,
                        opacity: 1
                    },
                    animate: {
                        x: '0%',
                        y: '-50%',
                        scale: .8,
                        opacity: .5,
                        transition: {
                            duration: .5
                        }
                    },
                    exit: {
                        x: '-50%',
                        y: '-50%',
                        scale: .8,
                        opacity: 0,
                        transition: {
                            duration: .5
                        }
                    }
                }
            }
        },
        desktop: {
            inc: {
                mainImg: {
                    initial: {
                        opacity: 0,
                        x: '0%',
                        y: '-85%',
                        scale: .8,
                        transition: {
                            duration: .5
                        }
                    },
                    exit: {
                        opacity: 0,
                        x: '-0%',
                        y: '-15%',
                        scale: .8,
                        transition: {
                            duration: .5
                        }
                    },
                    animate: {
                        opacity: 1,
                        x: '0%',
                        y: '-50%',
                        scale: 1,
                        transition: {
                            duration: .5
                        }
                    }
                },
                rightImg: {
                    initial: {
                        x: '-0%',
                        y: '-50%',
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: .5
                        }
                    },
                    animate: {
                        x: '0%',
                        y: '-15%',
                        scale: .8,
                        opacity: .5,
                        transition: {
                            duration: .5
                        }
                    },
                    exit: {
                        x: '0%',
                        y: '0%',
                        scale: .7,
                        opacity: 0,
                        transition: {
                            duration: .5
                        }
                    }
                },
                leftImg: {
                    initial: {
                        x: '0%',
                        y: '-100%',
                        scale: .5,
                        opacity: 0,
                        transition: {
                            duration: .5
                        }
                    },
                    animate: {
                        x: '0%',
                        y: '-85%',
                        scale: .8,
                        opacity: .5,
                        transition: {
                            duration: .5
                        }
                    },
                    exit: {
                        x: '0%',
                        y: '-50%',
                        scale: 1,
                        transition: {
                            duration: .5
                        }
                    }
                }
            },
            dec: {
                mainImg: {
                    exit: {
                        opacity: 0,
                        x: '0%',
                        y: '-85%',
                        scale: .8,
                        transition: {
                            duration: .5
                        }
                    },
                    initial: {
                        opacity: 0,
                        x: '-0%',
                        y: '-15%',
                        scale: .8,
                        transition: {
                            duration: .5
                        }
                    },
                    animate: {
                        opacity: 1,
                        x: '0%',
                        y: '-50%',
                        scale: 1,
                        transition: {
                            duration: .5
                        }
                    }
                },
                rightImg: {
                    exit: {
                        x: '-0%',
                        y: '-50%',
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: .5
                        }
                    },
                    animate: {
                        x: '0%',
                        y: '-15%',
                        scale: .8,
                        opacity: .5,
                        transition: {
                            duration: .5
                        }
                    },
                    initial: {
                        x: '0%',
                        y: '0%',
                        scale: .5,
                        opacity: 0,
                        transition: {
                            duration: .5
                        }
                    }
                },
                leftImg: {
                    exit: {
                        x: '0%',
                        y: '-100%',
                        scale: .7,
                        opacity: 0,
                        transition: {
                            duration: .5
                        }
                    },
                    animate: {
                        x: '0%',
                        y: '-85%',
                        scale: .8,
                        opacity: .5,
                        transition: {
                            duration: .5
                        }
                    },
                    initial: {
                        x: '0%',
                        y: '-50%',
                        scale: 1,
                        transition: {
                            duration: .5
                        }
                    }
                }
            }
        }
    }
}

export const visionTransitions = {
    blockContainer: {
        animate: {
            transition: {
                staggerChildren: .5
            }
        }
    },
    textContainer: {
        animate: {
            transition: {
                staggerChildren: .15
            }
        }
    },
    text: {
        animate: {
            opacity: .7,
            y: 0,
            transition: {
                duration: 1
            }
        },
        initial: {
            opacity: 0,
            y: 30
        }
    }
}

export const infoTransitions = {
    contentContainer: {
        img: {
            animate: {
                opacity: 1,
                transition: {
                    duration: 1
                }
            },
            initial: {
                opacity: .75
            }
        },
        text: {
            animate: {
                opacity: 1,
                transition: {
                    duration: 1
                }
            },
            initial: {
                opacity: 0
            }
        },
        link: {
            animate: {
                scaleX: 1,
                transition: {
                    duration: 1
                }
            },
            initial: {
                scaleX: 0
            }
        }
    }
}

export const moreInfoTransitions = {
    nameContainer: {
        animate: {
            transition: {
                staggerChildren: .4
            }
        }
    },
    name: {
        animate: {
            opacity: 1,
            transition: {
                duration: 1
            }
        },
        initial: {
            opacity: 0
        }
    }
}

export const saveEarthTransitions = {
    subHeader: {
        animate: {
            opacity: 1,
            transition: {
                duration: 1
            }
        },
        initial: {
            opacity: 0
        }
    },
    text: {
        animate: {
            opacity: 1,
            transition: {
                duration: 1
            }
        },
        initial: {
            opacity: 0
        }
    }
}