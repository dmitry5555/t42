# Docker Compose target
up:
	docker-compose up -d
down:
	docker-compose down

# Docker cleanup target
clean:
	docker-compose down --volumes --remove-orphans

cleanf:
	docker-compose down --volumes --remove-orphans
	docker system prune -f
