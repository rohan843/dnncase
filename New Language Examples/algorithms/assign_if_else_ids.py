from TopologicalScheduler import TopologicalScheduler
from Graph import Graph


def assign_if_else_ids(graph: Graph, scheduler: TopologicalScheduler) -> int:
    """
    This function traverses the graph and assigns to each node a conditional ID. It also matches an
    If/Else node to its corresponding End If node(s).

    Args:
        graph (Graph): _description_
        scheduler (TopologicalScheduler): _description_

    Returns:
        int: An error code. 0 if the ID assignment was successful.
    """
    next_node = scheduler.get_next_node()
