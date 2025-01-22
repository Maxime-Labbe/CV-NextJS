import codingame

def get_clash_rank():
    client = codingame.Client()
    codingamer = client.get_codingamer("MaximeLabbe")
    leaderboard = client.request('Leaderboards','getCodinGamerClashRanking', [5739451, 'global', None])
    return codingamer.get_clash_of_code_rank(),leaderboard['total']

if __name__ == "__main__":
    rank,count = get_clash_rank()
    print(rank)
    print(count)