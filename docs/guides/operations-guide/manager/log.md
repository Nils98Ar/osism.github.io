---
sidebar_label: Logging
sidebar_position: 10
---

# Logging

## Ansible

```
$ osism log ansible
(ara) help

Documented commands (use 'help -v' for verbose/'help <topic>' for details):
===========================================================================
alias  exit  history  quit          run_script  shell
edit   help  macro    run_pyscript  set         shortcuts

Application commands (type help <topic>):
=========================================
complete     host metrics  playbook delete   record delete  result show
expire       host show     playbook list     record list    task delete
help         play delete   playbook metrics  record show    task list
host delete  play list     playbook prune    result delete  task metrics
host list    play show     playbook show     result list    task show
```

### Sample usage

As an example, the role common is run. Irrelevant parts of outputs have been removed.

```
$ osism apply common
```

```
$ osism log ansible
```

```
(ara) play list
+----+-----------+-------------------------------------------------------+----------+-------+---------+-----------------------------+-----------------+
| id | status    | name                                                  | playbook | tasks | results | started                     | duration        |
+----+-----------+-------------------------------------------------------+----------+-------+---------+-----------------------------+-----------------+
| 69 | completed | Apply role common                                     |       49 |    21 |      68 | 2023-09-30T10:14:01.731212Z | 00:00:38.238032 |
+----+-----------+-------------------------------------------------------+----------+-------+---------+-----------------------------+-----------------+
```

```
(ara) play show 69
+----------+------------------------------------------+
| Field    | Value                                    |
+----------+------------------------------------------+
| id       | 69                                       |
| report   | http://ara-server:8000/playbooks/49.html |
| status   | completed                                |
| name     | Apply role common                        |
| playbook | (49) /ansible/kolla-common.yml           |
| started  | 2023-09-30T10:14:01.731212Z              |
| ended    | 2023-09-30T10:14:39.969244Z              |
| duration | 00:00:38.238032                          |
| items    | {'tasks': 21, 'results': 68}             |
+----------+------------------------------------------+
```

```
(ara) task list
+-----+-----------+---------+---------------------------------+----------------------------------------------------------------------------+----------+-----------------------------+-----------------+
|  id | status    | results | action                          | name                                                                       | playbook | started                     | duration        |
+-----+-----------+---------+---------------------------------+----------------------------------------------------------------------------+----------+-----------------------------+-----------------+
| 910 | completed |       0 | meta                            | common : Flush handlers                                                    |       49 | 2023-09-30T10:14:37.126872Z | 00:00:02.552006 |
| 909 | completed |       4 | file                            | common : Link kolla_logs volume to /var/log/kolla                          |       49 | 2023-09-30T10:14:35.502754Z | 00:00:01.039468 |
| 908 | completed |       4 | kolla_docker                    | common : Creating log volume                                               |       49 | 2023-09-30T10:14:34.134312Z | 00:00:01.076976 |
| 907 | completed |       4 | kolla_docker                    | common : Check common containers                                           |       49 | 2023-09-30T10:14:31.411916Z | 00:00:02.146165 |
| 906 | completed |       4 | template                        | common : Copy rabbitmq erl_inetrc to kolla toolbox                         |       49 | 2023-09-30T10:14:29.500998Z | 00:00:01.327607 |
| 905 | completed |       4 | template                        | common : Copy rabbitmq-env.conf to kolla toolbox                           |       49 | 2023-09-30T10:14:27.979869Z | 00:00:01.231630 |
| 904 | completed |       4 | file                            | common : Ensuring config directories have correct owner and permission     |       49 | 2023-09-30T10:14:26.422535Z | 00:00:01.263370 |
| 903 | completed |       4 | template                        | common : Ensure RabbitMQ Erlang cookie exists                              |       49 | 2023-09-30T10:14:24.880329Z | 00:00:01.255475 |
| 902 | completed |       4 | template                        | common : Copying over cron logrotate config file                           |       49 | 2023-09-30T10:14:23.199518Z | 00:00:01.392765 |
| 901 | completed |       4 | template                        | common : Copying over td-agent.conf                                        |       49 | 2023-09-30T10:14:21.085351Z | 00:00:01.826039 |
| 900 | completed |       1 | find                            | common : Find custom fluentd output config files                           |       49 | 2023-09-30T10:14:19.859670Z | 00:00:00.939663 |
| 899 | completed |       1 | find                            | common : Find custom fluentd format config files                           |       49 | 2023-09-30T10:14:18.711171Z | 00:00:00.858586 |
| 898 | completed |       1 | find                            | common : Find custom fluentd filter config files                           |       49 | 2023-09-30T10:14:17.542234Z | 00:00:00.877270 |
| 897 | completed |       1 | find                            | common : Find custom fluentd input config files                            |       49 | 2023-09-30T10:14:15.911699Z | 00:00:01.315217 |
| 896 | completed |       4 | template                        | common : Copying over config.json files for services                       |       49 | 2023-09-30T10:14:13.588195Z | 00:00:02.031647 |
| 895 | completed |       4 | copy                            | service-cert-copy : common | Copying over backend internal TLS key         |       49 | 2023-09-30T10:14:12.216984Z | 00:00:01.074853 |
| 894 | completed |       4 | copy                            | service-cert-copy : common | Copying over backend internal TLS certificate |       49 | 2023-09-30T10:14:10.895833Z | 00:00:01.022530 |
| 893 | completed |       4 | copy                            | service-cert-copy : common | Copying over extra CA certificates            |       49 | 2023-09-30T10:14:08.551850Z | 00:00:02.040932 |
| 892 | completed |       4 | include_tasks                   | common : include_tasks                                                     |       49 | 2023-09-30T10:14:07.019883Z | 00:00:00.950605 |
| 891 | completed |       4 | file                            | common : Ensuring config directories exist                                 |       49 | 2023-09-30T10:14:04.801633Z | 00:00:01.926842 |
| 890 | completed |       4 | include_tasks                   | common : include_tasks                                                     |       49 | 2023-09-30T10:14:03.054547Z | 00:00:01.166032 |
+-----+-----------+---------+---------------------------------+----------------------------------------------------------------------------+----------+-----------------------------+-----------------+
```

```
(ara) task show 910
+----------+------------------------------------------+
| Field    | Value                                    |
+----------+------------------------------------------+
| id       | 910                                      |
| uuid     | 0242ac1f-6510-3867-9eea-00000000004f     |
| report   | http://ara-server:8000/playbooks/49.html |
| name     | common : Flush handlers                  |
| action   | meta                                     |
| status   | completed                                |
| path     | /ansible/roles/common/tasks/deploy.yml   |
| lineno   | 8                                        |
| started  | 2023-09-30T10:14:37.126872Z              |
| ended    | 2023-09-30T10:14:39.678878Z              |
| duration | 00:00:02.552006                          |
| tags     | ['common']                               |
| handler  | False                                    |
+----------+------------------------------------------+
```

```
(ara) playbook list
+----+-----------+-------------------------------+--------+-----------------+---------------------------------------------------+-------+---------+-------+-----------------------------+-----------------+
| id | status    | controller                    | user   | ansible_version | path                                              | tasks | results | hosts | started                     | duration        |
+----+-----------+-------------------------------+--------+-----------------+---------------------------------------------------+-------+---------+-------+-----------------------------+-----------------+
| 49 | completed | kolla-ansible.manager_default | dragon | 2.14.10         | /ansible/kolla-common.yml                         |    21 |      68 |     5 | 2023-09-30T10:14:01.410334Z | 00:00:39.135309 |
+----+-----------+-------------------------------+--------+-----------------+---------------------------------------------------+-------+---------+-------+-----------------------------+-----------------+
```

```
(ara) playbook metrics
+---------------------------------------------------+-------+----------------+----------------+-------+---------+-------+-----------+--------+---------+
| aggregate                                         | count | duration_total | duration_avg   | tasks | results | hosts | completed | failed | running |
+---------------------------------------------------+-------+----------------+----------------+-------+---------+-------+-----------+--------+---------+
| /ansible/kolla-common.yml                         |     2 | 0:02:53.934432 | 0:01:26.967216 |    46 |     152 |    10 |         2 |      0 |       0 |
+---------------------------------------------------+-------+----------------+----------------+-------+---------+-------+-----------+--------+---------+
```

```
(ara) host list
+-----+-----------------------------------+----------+---------+--------+----+---------+-------------+-----------------------------+
|  id | name                              | playbook | changed | failed | ok | skipped | unreachable | updated                     |
+-----+-----------------------------------+----------+---------+--------+----+---------+-------------+-----------------------------+
| 164 | testbed-node-2.testbed.osism.xyz  |       49 |       0 |      0 | 14 |       2 |           0 | 2023-09-30T10:14:40.543599Z |
| 161 | testbed-manager.testbed.osism.xyz |       49 |       0 |      0 | 18 |       2 |           0 | 2023-09-30T10:14:40.283581Z |
| 163 | testbed-node-1.testbed.osism.xyz  |       49 |       0 |      0 | 14 |       2 |           0 | 2023-09-30T10:14:40.280601Z |
| 162 | testbed-node-0.testbed.osism.xyz  |       49 |       0 |      0 | 14 |       2 |           0 | 2023-09-30T10:14:40.279181Z |
| 165 | kolla-ansible.manager_default     |       49 |       0 |      0 |  0 |       0 |           0 | 2023-09-30T10:14:16.932135Z |
+-----+-----------------------------------+----------+---------+--------+----+---------+-------------+-----------------------------+
```

```
(ara) host show 164
+-------------+------------------------------------------+
| Field       | Value                                    |
+-------------+------------------------------------------+
| id          | 164                                      |
| report      | http://ara-server:8000/playbooks/49.html |
| name        | testbed-node-2.testbed.osism.xyz         |
| changed     | 0                                        |
| failed      | 0                                        |
| ok          | 14                                       |
| skipped     | 2                                        |
| unreachable | 0                                        |
| updated     | 2023-09-30T10:14:40.543599Z              |
+-------------+------------------------------------------+
```

## Container

```
$ osism log container testbed-node-0 horizon
[...]
++++ APACHE_LOCK_DIR=/var/lock/apache2
++++ export APACHE_LOG_DIR=/var/log/apache2
++++ APACHE_LOG_DIR=/var/log/apache2
++++ export LANG=C
++++ LANG=C
++++ export LANG
+++ install -d /var/run/apache2/
+++ rm -rf '/var/run/apache2/*'
+++ [[ ubuntu =~ centos|rocky ]]
+ echo 'Running command: '\''/usr/sbin/apache2 -DFOREGROUND'\'''
+ exec /usr/sbin/apache2 -DFOREGROUND
AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 192.168.16.10. Set the 'ServerName' directive globally to suppress this message
```

## OpenSearch

OpenSearch can be queried with [SQL](https://opensearch.org/docs/latest/search-plugins/sql/sql/index/).

```
$ osism log opensearch
```
