
This puts a 3x3 setup in 24 regions (3 nodes each have a copy of the whole data set).

Note that the nodes are not gossiping for 2 reasons:
1. Since they each have the full dataset, they don't need to relay
2. That is painful AF to do in fly.io because you don't know the name of a node until you've created it (unlike k8s where you can predict stateful set names)

While this may seem unfair, gossip activity would maybe max out at a few bytes per second over UDP... perhaps 0.01% CPU usage at peak?
# FireScrollFlyIOTest
