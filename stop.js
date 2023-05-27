async function main() {
  const machines = [
    {
        "id": "48ed436b733748",
        "name": "fs-iad-rg1",
        "state": "started",
        "region": "iad",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ7AE5E65TMGN1S0G9WE11",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:143:fae:da8b:2",
        "created_at": "2023-05-27T13:44:01Z",
        "updated_at": "2023-05-27T13:44:02Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "iad__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "iad",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195042183
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195041293
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "148e455c716e89",
        "name": "fs-yyz-rg1",
        "state": "started",
        "region": "yyz",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ7NV862WF849XBNDWQB32",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:8a0f:458f:d325:2",
        "created_at": "2023-05-27T13:44:12Z",
        "updated_at": "2023-05-27T13:44:20Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "yyz__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "yyz",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195060612
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195053025
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "1781994c574438",
        "name": "fs-ord-rg1",
        "state": "started",
        "region": "ord",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ7F3VRKF6DQHV81X2YNZ3",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:b0bb:ba73:8ab6:2",
        "created_at": "2023-05-27T13:44:06Z",
        "updated_at": "2023-05-27T13:44:07Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "ord__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "ord",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195047913
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195046042
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "4d891165b51587",
        "name": "fs-atl-rg1",
        "state": "started",
        "region": "atl",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ718HJG2G6ME80B7R44GK",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:e5:aadb:3e36:2",
        "created_at": "2023-05-27T13:43:51Z",
        "updated_at": "2023-05-27T13:43:52Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "atl__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "atl",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195032739
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195031938
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "148ed491f11589",
        "name": "fs-yul-rg1",
        "state": "started",
        "region": "yul",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ7ND96W1MTWTAW532YV47",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:139:746b:61a3:2",
        "created_at": "2023-05-27T13:44:12Z",
        "updated_at": "2023-05-27T13:44:15Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "yul__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "yul",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195055067
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195052495
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "e2865517f53186",
        "name": "fs-bos-rg1",
        "state": "started",
        "region": "bos",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ728PMYZ75V5VHWZDBTZE",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:ec:f035:6748:2",
        "created_at": "2023-05-27T13:43:52Z",
        "updated_at": "2023-05-27T13:43:53Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "bos__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "bos",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195033856
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195032874
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "148ed727f0d489",
        "name": "fs-den-rg1",
        "state": "started",
        "region": "den",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ738XXMH08PF3HF69XBEP",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:15c:6f20:16f7:2",
        "created_at": "2023-05-27T13:43:53Z",
        "updated_at": "2023-05-27T13:43:54Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "den__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "den",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195034889
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195033907
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "e286272b7d0586",
        "name": "fs-mia-rg1",
        "state": "started",
        "region": "mia",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ7DSBT5AWBVNADB4BZDE0",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:a0:35da:fee5:2",
        "created_at": "2023-05-27T13:44:04Z",
        "updated_at": "2023-05-27T13:44:09Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "mia__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "mia",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195049833
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195044711
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "3d8d9933a02089",
        "name": "fs-qro-rg1",
        "state": "started",
        "region": "qro",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ7G962MV3AMQZC3MP01J7",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:d3:a358:efd5:2",
        "created_at": "2023-05-27T13:44:07Z",
        "updated_at": "2023-05-27T13:44:12Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "qro__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "qro",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195052685
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195047220
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "148ed290b764e8",
        "name": "fs-sea-rg1",
        "state": "started",
        "region": "sea",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ7HFWVW78E1H0NHGB3MZ9",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:122:59d2:51ca:2",
        "created_at": "2023-05-27T13:44:08Z",
        "updated_at": "2023-05-27T13:44:11Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "sea__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "sea",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195051410
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195048476
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "32874549f343e8",
        "name": "fs-lax-rg1",
        "state": "started",
        "region": "lax",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ7C2EAT1WC6KT2SPXBNZZ",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:f8:b87:30de:2",
        "created_at": "2023-05-27T13:44:02Z",
        "updated_at": "2023-05-27T13:44:10Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "lax__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "lax",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195050536
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195042956
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "32874699b6d418",
        "name": "fs-sjc-rg1",
        "state": "started",
        "region": "sjc",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ7K6GKEMK4W6GFNRGCST9",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:138:e15a:192b:2",
        "created_at": "2023-05-27T13:44:10Z",
        "updated_at": "2023-05-27T13:44:13Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "sjc__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "sjc",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195053713
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195050267
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "32874365a91e78",
        "name": "fs-lhr-rg1",
        "state": "started",
        "region": "lhr",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ7CKS1W2CTQ4CEJANG8DZ",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:13d:6c84:ccc8:2",
        "created_at": "2023-05-27T13:44:03Z",
        "updated_at": "2023-05-27T13:44:06Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "lhr__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "lhr",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195046886
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195043541
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "3d8d9e16c26e89",
        "name": "fs-cdg-rg1",
        "state": "started",
        "region": "cdg",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ72S67G2Q0XEBK786VP35",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:169:910:19ad:2",
        "created_at": "2023-05-27T13:43:53Z",
        "updated_at": "2023-05-27T13:43:54Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "cdg__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "cdg",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195034428
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195033396
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "91857299a96708",
        "name": "fs-ams-rg1",
        "state": "started",
        "region": "ams",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ700EJP25NQQYF25A8N37",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:10d:37ef:e7b0:2",
        "created_at": "2023-05-27T13:43:50Z",
        "updated_at": "2023-05-27T13:43:53Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "ams__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "ams",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195033433
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195030585
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "e784e775f65783",
        "name": "fs-dfw-rg1",
        "state": "started",
        "region": "dfw",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ73PAKMDN26N52F4891BK",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:162:131:bc57:2",
        "created_at": "2023-05-27T13:43:54Z",
        "updated_at": "2023-05-27T13:43:56Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "dfw__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "dfw",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195036018
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195034331
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "4d891193b54087",
        "name": "fs-bog-rg1",
        "state": "started",
        "region": "bog",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ71WXCZPVFM8VY1RJW7R2",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:cf:6462:e248:2",
        "created_at": "2023-05-27T13:43:52Z",
        "updated_at": "2023-05-27T13:43:53Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "bog__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "bog",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195033961
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195032492
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "e2865503ce0986",
        "name": "fs-gdl-rg1",
        "state": "started",
        "region": "gdl",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ76A052P27W7EF72973BX",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:d8:7d80:f312:2",
        "created_at": "2023-05-27T13:43:56Z",
        "updated_at": "2023-05-27T13:43:58Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "gdl__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "gdl",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195038088
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195037007
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "6e82dd75c770e8",
        "name": "fs-arn-rg1",
        "state": "started",
        "region": "arn",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ70NBSJVG7DVY8KKRGQKD",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:e8:4d5d:48ec:2",
        "created_at": "2023-05-27T13:43:51Z",
        "updated_at": "2023-05-27T13:43:53Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "arn__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "arn",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195033057
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195031293
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "9185e56f754178",
        "name": "fs-mad-rg1",
        "state": "started",
        "region": "mad",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ7D9EPG8AVY5MTYKGDVD9",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:25db:74c8:ca70:2",
        "created_at": "2023-05-27T13:44:04Z",
        "updated_at": "2023-05-27T13:44:09Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "mad__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "mad",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195049771
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195044166
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "3287d91a097785",
        "name": "fs-otp-rg1",
        "state": "started",
        "region": "otp",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ7FRSEHZ8B3JG8A3MGVA8",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:65:b22c:38b4:2",
        "created_at": "2023-05-27T13:44:06Z",
        "updated_at": "2023-05-27T13:44:10Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "otp__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "otp",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195050614
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195046711
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "17811612a9e2e8",
        "name": "fs-scl-rg1",
        "state": "started",
        "region": "scl",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ7GYSJHAGPD8925PDTDNF",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:100:6885:71b9:2",
        "created_at": "2023-05-27T13:44:07Z",
        "updated_at": "2023-05-27T13:44:13Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "scl__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "scl",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195053770
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195047921
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "4d89116db2e387",
        "name": "fs-gig-rg1",
        "state": "started",
        "region": "gig",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ76ZTV9YDS07F68N4FZ5R",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:d5:e15d:a5bc:2",
        "created_at": "2023-05-27T13:43:57Z",
        "updated_at": "2023-05-27T13:43:59Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "gig__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "gig",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195039086
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195037725
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "32874394c05d85",
        "name": "fs-eze-rg1",
        "state": "started",
        "region": "eze",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ74Q1PR2Z12HHQP7WCWW3",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:148:4a02:1e2:2",
        "created_at": "2023-05-27T13:43:55Z",
        "updated_at": "2023-05-27T13:43:59Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "eze__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "eze",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195039819
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195036032
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "4d89001ce79387",
        "name": "fs-gru-rg1",
        "state": "started",
        "region": "gru",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ77PT228R42A8EJDMVFQT",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:1f60:55b5:f473:2",
        "created_at": "2023-05-27T13:43:58Z",
        "updated_at": "2023-05-27T13:44:05Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "gru__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "gru",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195045297
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195038448
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "3287ee1f323385",
        "name": "fs-nrt-rg1",
        "state": "started",
        "region": "nrt",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ7EKKY1EQBHM21J569YCP",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:d86c:3df9:f85a:2",
        "created_at": "2023-05-27T13:44:05Z",
        "updated_at": "2023-05-27T13:44:14Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "nrt__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "nrt",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195054059
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195045525
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "e784403bd53783",
        "name": "fs-waw-rg1",
        "state": "started",
        "region": "waw",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ7MW8BQ4MCYJ0M0JE5FWX",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:8c:f6f2:7c31:2",
        "created_at": "2023-05-27T13:44:11Z",
        "updated_at": "2023-05-27T13:44:15Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "waw__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "waw",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195055329
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195051969
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "9185971a407983",
        "name": "fs-hkg-rg1",
        "state": "started",
        "region": "hkg",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ7A0CESZW2FJW6AC94XG9",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:7f47:858f:9e02:2",
        "created_at": "2023-05-27T13:44:00Z",
        "updated_at": "2023-05-27T13:44:03Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "hkg__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "hkg",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195043981
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195040816
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "32874402b63e98",
        "name": "fs-syd-rg1",
        "state": "started",
        "region": "syd",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ7M5CSCVCTQR13ZS8M15K",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:f1:1962:7964:2",
        "created_at": "2023-05-27T13:44:11Z",
        "updated_at": "2023-05-27T13:44:16Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "syd__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "syd",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195056149
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195051260
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "918593ec4d4e83",
        "name": "fs-sin-rg1",
        "state": "started",
        "region": "sin",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ7JHMBJ9Y2DRRSHX7FZWT",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:a755:acdd:86cf:2",
        "created_at": "2023-05-27T13:44:09Z",
        "updated_at": "2023-05-27T13:44:15Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "sin__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "sin",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195055413
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195049550
            }
        ],
        "LeaseNonce": ""
    },
    {
        "id": "91850e7f472183",
        "name": "fs-jnb-rg1",
        "state": "started",
        "region": "jnb",
        "image_ref": {
            "registry": "ghcr.io",
            "repository": "danthegoodman1/firescroll",
            "tag": "v0.1.3",
            "digest": "sha256:5b599f1eb5c6491e61662fb2732a9655f41d8873c29b6049a6a82e0d6e3e838b",
            "labels": null
        },
        "instance_id": "01H1EQ7BDMY1P5PZQCCHX9WBNK",
        "version": "",
        "private_ip": "fdaa:1:e6d1:a7b:d5a7:2316:2561:2",
        "created_at": "2023-05-27T13:44:02Z",
        "updated_at": "2023-05-27T13:44:05Z",
        "config": {
            "env": {
                "DEBUG": "1",
                "INSTANCE_ID": "jnb__rg1",
                "KAFKA_SEEDS": "165.227.176.159:19092",
                "NAMESPACE": "testns",
                "PARTITIONS": "3",
                "PRETTY": "1",
                "REGION": "jnb",
                "REPLICA_GROUP": "rg1"
            },
            "init": {
                "exec": null,
                "entrypoint": null,
                "cmd": null,
                "tty": false
            },
            "image": "ghcr.io/danthegoodman1/firescroll:v0.1.3",
            "metadata": null,
            "restart": {
                "policy": ""
            },
            "services": [
                {
                    "protocol": "tcp",
                    "internal_port": 8190,
                    "ports": [
                        {
                            "port": 80,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                },
                {
                    "protocol": "tcp",
                    "internal_port": 8191,
                    "ports": [
                        {
                            "port": 8191,
                            "handlers": [
                                "http"
                            ]
                        }
                    ]
                }
            ],
            "size": "performance-2x",
            "guest": {
                "cpu_kind": "performance",
                "cpus": 2,
                "memory_mb": 4096
            },
            "metrics": {
                "port": 8191,
                "path": "/metrics"
            }
        },
        "events": [
            {
                "type": "start",
                "status": "started",
                "source": "flyd",
                "timestamp": 1685195045244
            },
            {
                "type": "launch",
                "status": "created",
                "source": "user",
                "timestamp": 1685195042257
            }
        ],
        "LeaseNonce": ""
    }
]

  for (const machine of machines) {
    try {
      const res = await destroy(machine.id)
      console.log("destroyed", machine.id)
    } catch (error) {
      console.error("Failed to destroy machine:", error.message, "... continuing")
    }
  }
  console.log("done")
}

async function destroy(id) {
  const res = await fetch(`https://api.machines.dev/v1/apps/firescroll-test/machines/${id}/stop`, {
    headers: {
      "content-type": "application/json",
      "authorization": `Bearer ${process.env.FLY_API_TOKEN}`
    },
    method: "POST"
  })
  if (res.status > 299) {
    throw new Error(`Error destroying machine - status ${res.status}: ${await res.text()}`)
  }
  return await res.json()
}

main()
